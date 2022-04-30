import './App.css';
import ProductList from './components/ProductList';

function App() {
    return (
        <div className="App">
            <header>Header</header>
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
            </div>
            <div className="ads">Ads</div>
            <ProductList type="best" count={3}>
                Best Sellers
            </ProductList>
            <div className="offers">Offers</div>
            <footer>Footer</footer>
        </div>
    );
}

export default App;
