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
                <div className="productItem">
                    <a href="#item">
                        <img src={item.src} alt={item.name} />
                    </a>
                    <p>{item.rating}</p>
                    <h4>{item.name}</h4>
                    <h3>${item.price}</h3>
                    <div>
                        <a href="#cart">Add to Cart</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
