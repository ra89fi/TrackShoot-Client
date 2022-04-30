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
                <div>
                    <a href="#item">
                        <img src={item.src} alt={item.name} />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
