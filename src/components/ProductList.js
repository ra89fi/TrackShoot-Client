import React, { useEffect, useState } from 'react';
import './ProductList.css';

const ProductList = ({ type, count }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then((data) => data.json())
            .then((products) => setProducts(products))
            .catch((err) => console.log(err.message));
    }, []);
    return (
        <div className="productList">
            {products?.slice(0, count).map((item) => (
                <div className="productItem" key={item.name}>
                    <img src={item.src} alt={item.name} />
                    <p>{item.rating}</p>
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <p>{item.supplier}</p>
                    <h4>${item.price}</h4>
                    <div>
                        <a href={`/inventory/${item._id}`}>Manage</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
