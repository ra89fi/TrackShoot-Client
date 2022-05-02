import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
    console.log(products);
    return (
        <div className="productList">
            {products.map((item) => (
                <div className="productItem" key={item._id}>
                    <img src={item.image} alt={item.name} />
                    <p>{item.rating}</p>
                    <h5>{item.name}</h5>
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
