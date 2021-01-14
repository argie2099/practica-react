import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styles/style.css'
import logolargo from '../../logolargo.png'

const Nav = () => (
    <>
        <nav>
            <NavLink to="/">
                <img id="navLogo" src={logolargo} alt="logo"/>
            </NavLink>
            <div className="overlay">
                <ul>
                    <li>
                        <NavLink to="/about" activeClassName="act">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" activeClassName="act">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" activeClassName="act">Users</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
)

export default Nav