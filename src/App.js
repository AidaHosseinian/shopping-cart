import products from './data/products.js';
import ProductCard from './components/product/productCard.js';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import './styles/main.scss';
import { initialState, reducer } from './store/reducer.js';
import { StoreProvider } from './store/store.js';

function App() {

  return (<StoreProvider initialState={initialState} reducer={reducer}>
    <Header />
    
    <div className='body'>
      <div className="card-container">
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[1]} />
        <ProductCard product={products[0]} />
        <ProductCard product={products[0]} />
      </div>
    </div>

    <Footer />
  </StoreProvider>);
}

export default App;
