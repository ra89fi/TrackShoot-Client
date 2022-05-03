import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const params = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_URL}/items/${params.id}`)
            .then((data) => data.json())
            .then((item) => setItem(item))
            .catch((err) => console.log(err.message));
    }, []);
    const keys = ['_id', 'image', 'lastModified', 'count'];
    const onDelivered = () => {
        fetch(`${process.env.REACT_APP_BACK_URL}/items/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: item.quantity - 1,
                sold: item.sold + 1,
            }),
        })
            .then((data) => data.json())
            .then((result) => {
                console.log(result);
                if (result.message === 'ok') {
                    setItem({
                        ...item,
                        quantity: item.quantity - 1,
                        sold: item.sold + 1,
                    });
                }
            })
            .catch((err) => console.log(err.message));
    };
    const onAdd = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_BACK_URL}/items/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: item.quantity + parseInt(e.target.stock.value),
            }),
        })
            .then((data) => data.json())
            .then((result) => {
                console.log(result);
                if (result.message === 'ok') {
                    setItem({
                        ...item,
                        quantity:
                            item.quantity + parseInt(e.target.stock.value),
                    });
                    e.target.reset();
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div>
            <div style={{ width: '65%', margin: '60px auto' }}>
                <div style={{ display: 'flex' }}>
                    <img src={item.image} alt={item.name} />
                    <div style={{ marginLeft: '20px' }}>
                        {Object.keys(item).map(
                            (key) =>
                                !keys.includes(key) && (
                                    <p key={key}>
                                        {key[0].toUpperCase() + key.slice(1)} :{' '}
                                        {item[key]}
                                    </p>
                                )
                        )}
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                    }}
                >
                    <p>
                        <button
                            className="btn btn-danger"
                            onClick={onDelivered}
                        >
                            Delivered
                        </button>
                    </p>
                    <form
                        style={{ display: 'flex', alignItems: 'center' }}
                        onSubmit={onAdd}
                    >
                        <input name="stock" type="number" required /> &nbsp;{' '}
                        <button className="btn btn-primary" type="submit">
                            Add to Stock
                        </button>
                    </form>
                    <p>
                        <a
                            href="/inventory"
                            style={{
                                textDecoration: 'none',
                                padding: '8px 30px',
                                borderRadius: '3px',
                                backgroundColor: '#af052d',
                                color: '#fff',
                            }}
                        >
                            Manage Inventories
                        </a>
                    </p>
                </div>
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

export default Item;
