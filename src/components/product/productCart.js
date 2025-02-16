import React from "react";
import  "./product-cart.scss"
import { useStore } from "../../store/store";
import { addProduct } from "../../store/reducer";


const ProductCart = ({ product }) => {
  
  // get dispatch to update store
  const [, dispatch] = useStore();

  const handleOnClick = () => {
    dispatch(addProduct({
      productId: product.id,
      quantity: 1
    }));
  }

  return (
    <div className="product-cart">
      <div className="product-cart__picture-frame" alt={product.name} style={{backgroundImage: `url(./images/product-${product.id}.jpg)`}}> 
      </div>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button className="product-cart__button" onClick={handleOnClick}>
        Add to Cart
      </button>
    </div>
  );
};
  
export default ProductCart;