import React from 'react';
import ProductList from './ProductList';

const Home = () => {
    // useEffect here to fetch products
    // ProductList will just display them
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="left">
                        <img src="images/sample-1.jpg" alt="Sample Shoe" />
                    </div>
                    <div className="right">
                        <div>
                            <img
                                src="images/sub-banner-2.jpg"
                                alt="Men's Shoe"
                            />
                            <div>
                                <h4>Latest Collection</h4>
                                <p>30% Discount</p>
                                <a href="#cart">Shop Now</a>
                            </div>
                        </div>
                        <div>
                            <img
                                src="images/cms-banner-1.jpg"
                                alt="Men's Shoe"
                            />
                            <div>
                                <h4>Latest Collection</h4>
                                <p>30% Discount</p>
                                <a href="#cart">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="collectionHeader">Latest Collection</h2>
                <div className="border"></div>
                <ProductList type="latest" count={6}>
                    Latest Products
                </ProductList>
                <p className="collectionHeader">
                    <a href="#products">See All Products</a>
                </p>
                <div className="ads">
                    <div>
                        <img src="images/cms-banner-2.jpg" alt="Men's Shoe" />
                        <div>
                            <h4>New Collection</h4>
                        </div>
                    </div>
                    <div>
                        <img src="images/sub-banner-2.jpg" alt="Men's Shoe" />
                        <div>
                            <h4>Latest Collection</h4>
                            <p>30% Discount</p>
                            <a href="#cart">Shop Now</a>
                        </div>
                    </div>
                    <div>
                        <img src="images/cms-banner-1.jpg" alt="Men's Shoe" />
                        <div>
                            <h4>Latest Collection</h4>
                            <p>30% Discount</p>
                            <a href="#cart">Shop Now</a>
                        </div>
                    </div>
                </div>
                <h2 className="collectionHeader">Best Selling Products</h2>
                <div className="border"></div>
                <ProductList type="best" count={3}></ProductList>
            </div>
        </div>
    );
};

export default Home;
