import React, { useState } from "react";
import products from "../../data/products.js"
import './header.scss';
import AidaLogo from '../../images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../store/store";

import {filterItems} from "../../store/reducer.js"

function Header() {
    //const [query, setQuery] = useState([])
    // read store
    const [store, dispatch] = useStore();
    
    const handleSearchChange = (e) => {
        dispatch(filterItems(e.target.value))
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
            <a link="#">
                <FontAwesomeIcon icon={faCartShopping} />
            </a>
        </header>
    );
  }
  
export default Header;