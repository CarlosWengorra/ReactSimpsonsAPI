import React from "react";
import './header.css';
import Logo from '../assets/Logo.png';
import { Search } from "../Search/Search";

function Header (setSearchTerm){
    return(
            <nav className="header">
                <div>
                    <div className="header__logo">
                        <a href="/" >
                            <img src={Logo} id="logo" alt="logo" />
                        </a>
                    </div>
                    <Search setSearchTerm={setSearchTerm} />
                </div>
            </nav>
    )
};


export { Header };