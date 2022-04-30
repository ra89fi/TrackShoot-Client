import './App.css';
import ProductList from './components/ProductList';

function App() {
    return (
        <div className="App">
            <header>Header</header>
            <div className="banner">Banner</div>
            <ProductList type="latest" count={6}>
                Latest Products
            </ProductList>
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
