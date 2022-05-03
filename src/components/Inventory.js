import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACK_URL}/items`)
            .then((data) => data.json())
            .then((products) => setProducts(products))
            .catch((err) => console.log(err.message));
    }, []);
    const keys = ['name', 'rating', 'price', 'quantity', 'supplier', 'sold'];
    const deleteItem = (id) => {
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
            <p style={{ margin: '60px 100px 0px' }}>
                <Link to="/newitem">Add New Item</Link>
            </p>
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
                                    <Link to={`/inventory/${item._id}`}>
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
    );
};

export default Inventory;
