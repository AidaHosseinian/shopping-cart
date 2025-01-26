import React from "react";
import './header.scss';
import AidaLogo from '../../images/Aida-logo-1.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "../../store/store";

function Header() {

    // read store
    const [store] = useStore();

    return (
        <header className="header">
            <img className="header__image"  src={AidaLogo}></img>
            <div className="header__search-bar">
                <input className="header__search-bar__search-input" type="text" placeholder="Search"/>
            </div>
            <a link="#">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{store.basketProducts.length}</span>
            </a>
        </header>
    );
  }
  
export default Header;