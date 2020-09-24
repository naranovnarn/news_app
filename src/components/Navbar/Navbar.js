import React from 'react';
import PopUp from '../PopUp/PopUp';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
    return(

        <header className="Navbar">
            <nav className="navbar navbar-expand navbar-dark">
                <ul className="navbar-nav ">
                    <li className="navbar item">
                        <NavLink exact to="/" className="nav-link">Главная</NavLink>
                    </li>
                    <li className="navbar item">
                        <NavLink to="/news/" className="nav-link">Новости</NavLink>
                    </li>
                    <li className="navbar item">
                        <PopUp />
                    </li>
                </ul>
            </nav>
        </header>

    );
}

