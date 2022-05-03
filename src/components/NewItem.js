import React, { useState } from 'react';

import app from '../firebase.init';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app);

const NewItem = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);
    const onSubmit = (e) => {
        setError(null);
        setLoading(true);
        e.target.submit.disabled = true;
        e.preventDefault();
        const item = {
            name: e.target.name.value,
            image: e.target.image.value,
            price: parseFloat(e.target.price.value),
            quantity: parseInt(e.target.quantity.value),
            description: e.target.description.value,
            rating: 0,
            sold: 0,
            supplier: user.email.split('@')[0],
        };
        fetch(`${process.env.REACT_APP_BACK_URL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then((data) => data.json())
            .then((result) => {
                console.log(result);
                if (result.message === 'ok') {
                    e.target.reset();
                }
            })
            .catch((err) => setError(err))
            .finally(() => {
                e.target.submit.disabled = false;
                setLoading(false);
            });
    };
    return (
        <div style={{ width: '400px', margin: '60px auto' }}>
            <form
                onSubmit={onSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '450px',
                    justifyContent: 'space-evenly',
                }}
            >
                Name
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                />
                Image URL
                <input
                    type="text"
                    className="form-control"
                    id="image"
                    required
                />
                Price
                <input
                    type="number"
                    className="form-control"
                    id="price"
                    required
                />
                Quantity
                <input
                    type="number"
                    className="form-control"
                    id="quantity"
                    required
                />
                Description
                <textarea
                    rows="3"
                    className="form-control"
                    id="description"
                    required
                />
                <button className="btn btn-info" type="submit" id="submit">
                    Submit
                </button>
            </form>
            {error && <p className="text-danger errTxt">{error.message}</p>}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default NewItem;
