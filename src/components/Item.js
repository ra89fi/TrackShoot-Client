import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const params = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        fetch('products.json')
            .then((data) => data.json())
            .then((products) =>
                setItem(products.filter((item) => item.id === params.id)[0])
            )
            .catch((err) => console.log(err.message));
    }, []);
    return (
        <div>
            {Object.keys(item).map((key) => (
                <p>{item[key]}</p>
            ))}
            <p>
                <button className="btn btn-danger">Delivered</button>
            </p>
            <p>
                <input type="number" /> &nbsp;{' '}
                <button className="btn btn-warning">Add to Stock</button>
            </p>
            <p>
                <a href="/inventory">Manage Inventories</a>
            </p>
        </div>
    );
};

export default Item;
