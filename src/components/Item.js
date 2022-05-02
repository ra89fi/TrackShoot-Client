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
    const keys = ['_id', 'image'];
    const onDelivered = () => {};
    const onAdd = () => {};
    return (
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
                    <button className="btn btn-danger" onClick={onDelivered}>
                        Delivered
                    </button>
                </p>
                <p style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="number" /> &nbsp;{' '}
                    <button className="btn btn-warning" onClick={onAdd}>
                        Add to Stock
                    </button>
                </p>
                <p>
                    <a href="/inventory">Manage Inventories</a>
                </p>
            </div>
        </div>
    );
};

export default Item;
