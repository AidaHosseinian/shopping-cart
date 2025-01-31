import products from "../data/products";
import { useStore } from "../store/store";
import ProductCard from "../components/product/productCard";

export default function ProductList() {
    const [store] = useStore();

    return <div className="card-container">
    {products
      .filter(product => product.name.toLowerCase().includes(store.searchFilter.toLowerCase()))
      .map(product => <ProductCard 
        key={product.id} 
        product={product} 
    />)}
    </div>
}