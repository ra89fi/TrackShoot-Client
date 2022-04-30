import React from 'react';

const ProductList = ({ type, count }) => {
    return <div>{`${count} ${type} items go here`}</div>;
};

export default ProductList;
