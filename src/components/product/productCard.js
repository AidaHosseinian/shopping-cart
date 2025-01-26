import React from "react";
import  "./product-card.scss"
import { useStore } from "../../store/store";
import { addProduct } from "../../store/reducer";


const ProductCard = ({ product }) => {
  
  // get dispatch to update store
  const [, dispatch] = useStore();

  const handleOnClick = () => {
    dispatch(addProduct(product));
  }

  return (
    <div className="product-card">
      <div className="product-card__picture-frame">
        <img className="product-card__picture-frame__image" alt={product.name} src={product.image}/>
      </div>
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button className="product-card__button" onClick={handleOnClick}>
        Add to Cart
      </button>
    </div>
  );
};
  
export default ProductCard;