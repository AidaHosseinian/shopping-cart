import React, { useState } from "react";
import products from "../../data/products.js"
import './header.scss';
import PopUp from "../popup/PopUp.js";
import AidaLogo from '../../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../store/store";
import {filterItems, togglePopup} from "../../store/reducer.js";



function Header() {
    // read store
    const [store, dispatch] = useStore();
    
    const handleSearchChange = (e) => {
        dispatch(filterItems(e.target.value))
    }

    const handleShowShoppingCard = () => {
        
        dispatch(togglePopup(true));
    }

    return (
        <header className="header">
            <img className="header__image"  src={AidaLogo}></img>
            <div className="header__search-bar">
                <input 
                value={store.searchFilter}
                onChange={handleSearchChange}
                className="header__search-bar__search-input" 
                type="text" 
                placeholder="Search"
                />
            </div>
            <a link="#" onClick={handleShowShoppingCard}>
                <FontAwesomeIcon icon={faCartShopping} />
                {store.basketProducts.length > 0? 
                    <span className="header__cart-counter">{store.basketProducts.length}</span> :
                    <span></span>
                }
            </a>
        </header>
    );
  }
  
export default Header;