import React from "react";
import { useStore } from "../../store/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import products from '../../data/products';
import { changeQuantity, removeProduct } from "../../store/reducer";

const BasketProduct = ({productId, quantity}) => {
  
  const [store, dispatch] = useStore();

  const product = products.find(p => p.id === productId);

  const handleRemoveProduct = () => dispatch(removeProduct(productId))

  const handleQuantityChange = (q) => dispatch(changeQuantity(productId, q))
 
  return (<div className="popup__inner__items">
            <img className="popup__inner__items__img" src={`./images/product-${productId}.jpg`} alt={product.name}/>
            <div className="popup__inner__items__title">
                <h3>{product.name}</h3>
                <span>size:M</span>
                <span>color:Grey</span>
            </div>
            <div className="popup__inner__items__quantity">
                <button className="popup__inner__items__quantity__btn-minus button " onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{quantity}</span>
                <button className="popup__inner__items__quantity__btn-plus button " onClick={() => handleQuantityChange(+1)}>+</button>
            </div>
            <span className="popup__inner__items__price">${quantity * product.price}</span>
            <button className="popup__inner__items__delete-btn button" onClick={handleRemoveProduct}>
                <FontAwesomeIcon icon={faTrashCan}/>
            </button>
        </div>
  );
};
  
export default BasketProduct;