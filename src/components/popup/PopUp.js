import React from "react";
import  "./popup.scss";
import  "../../styles/main.scss";
import { useStore } from "../../store/store";
import { togglePopup } from "../../store/reducer";
import BasketProduct from "./BasketProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

import emptyBasket from '../../images/empty-cart';
const PopUp = () => { 
  
  const [store, dispatch] = useStore();

  const closePopup = () => {
    dispatch(togglePopup(false));
  }

  const stopPropagation = e => e.stopPropagation();
 
  return (
    <div 
    id="popup" 
    className={`popup ${store.isPopupShow ? 'popup__show': ''}`}
    onClick={closePopup}
    >
        <div className="popup__inner" onClick={stopPropagation}>
          <div className="popup__inner__header">
            <span>Shopping Card</span>
            <button className="popup__inner__close-btn button" onClick={closePopup}>
              <FontAwesomeIcon icon={faSquareXmark} />
            </button>
          </div>

          <div  className="popup__inner__content">
          {store.basketProducts.length ==0
          ? <>
            {emptyBasket}
            There are no items in your shopping cart.
          </>
          : store.basketProducts.map(({productId, quantity}) => <BasketProduct 
                  productId={productId} 
                  quantity={quantity} 
                  key={productId} 
                />)
          }
          </div>
      </div>
    </div>
)}  
  
export default PopUp;