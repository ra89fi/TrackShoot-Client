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
                        <img src="images/parallax-bg.jpg" alt="Sample Shoe" />
                    </div>
                    <div className="right">
                        <div>
                            <img
                                src="images/sub-banner-2.jpg"
                                alt="Men's Shoe"
                            />
                            <div>
                                <br />
                                <h6>Commodi consequatur</h6>
                            </div>
                        </div>
                        <div>
                            <img
                                src="images/cms-banner-1.jpg"
                                alt="Men's Shoe"
                            />
                            <div>
                                <br />
                                <h6>Voluptas assumenda</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2 className="collectionHeader">Latest Products</h2>
                <div className="border"></div>
                <ProductList type="latest" count={6}></ProductList>
                <p className="collectionHeader">
                    <a href="/inventory">Manage Inventories</a>
                </p>
                <div className="ads">
                    <div>
                        <img src="images/cms-banner-2.jpg" alt="Men's Shoe" />
                        <div>
                            <br />
                            <h6>Consectetur Hampden</h6>
                        </div>
                    </div>
                    <div>
                        <img src="images/sub-banner-2.jpg" alt="Men's Shoe" />
                        <div>
                            <br />
                            <h6>Exercitat Virginia</h6>
                        </div>
                    </div>
                    <div>
                        <img src="images/cms-banner-1.jpg" alt="Men's Shoe" />
                        <div>
                            <br />
                            <h6>Accusantium doloremque</h6>
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
