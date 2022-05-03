import React, { useEffect, useState } from 'react';

import app from '../firebase.init';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_BACK_URL}/items?supplier=${
                user.email.split('@')[0]
            }`
        )
            .then((data) => data.json())
            .then((products) => setProducts(products))
            .catch((err) => console.log(err.message));
    }, [user]);
    const keys = ['name', 'rating', 'price', 'quantity', 'supplier', 'sold'];
    const deleteItem = (id) => {
        const ans = window.confirm(
            'Are you sure you want to delete this item?'
        );
        if (!ans) return;
        fetch(`${process.env.REACT_APP_BACK_URL}/items/${id}`, {
            method: 'DELETE',
        })
            .then((data) => data.json())
            .then((result) => {
                console.log(result);
                if (result.message === 'ok') {
                    const newProducts = products.filter(
                        (item) => item._id !== id
                    );
                    setProducts(newProducts);
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div>
            <div>
                {products.length ? (
                    <table
                        className="table"
                        style={{ width: '85%', margin: '30px auto' }}
                    >
                        <thead className="thead-dark">
                            <tr>
                                {keys.map((key) => (
                                    <th key={key} scope="col">
                                        {key[0].toUpperCase() + key.slice(1)}
                                    </th>
                                ))}
                                <th key="action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item) => (
                                <tr key={item._id}>
                                    {keys.map((key) => (
                                        <td key={key}>{item[key]}</td>
                                    ))}
                                    <td key="action">
                                        <Link
                                            to={`/inventory/${item._id}`}
                                            style={{
                                                textDecoration: 'none',
                                                padding: '8px 30px',
                                                borderRadius: '3px',
                                                backgroundColor: '#af052d',
                                                color: '#fff',
                                            }}
                                        >
                                            Manage
                                        </Link>
                                        &nbsp; &nbsp;
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => deleteItem(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No products found!</p>
                )}
            </div>
            <footer
                style={{
                    marginTop: '60px',
                    padding: '40px 0',
                    backgroundColor: '#1a1a1a',
                    textAlign: 'center',
                    color: '#eee',
                }}
            >
                Copyright &copy;2022
            </footer>
        </div>
    );
};

export default MyItems;
