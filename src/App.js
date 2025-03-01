
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import './styles/main.scss';
import { initialState, reducer } from './store/reducer.js';
import { StoreProvider } from './store/store.js';
import ProductList from './pages/ProductList.jsx';
import PopUp from "./components/popup/PopUp.js";

function App() { 

  return (<StoreProvider initialState={initialState} reducer={reducer}>
    <Header/>
    
    <div className="main-container">
      <ProductList />
      <PopUp />
    </div>
    <Footer />
  </StoreProvider>);
}

export default App;
