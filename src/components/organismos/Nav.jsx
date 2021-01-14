import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/style.css'

const Nav = () => (
    <>
        <nav>
            <img id="navLogo" src="#" alt="logo"/>
            <ul>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/shop">Shop</a>
                </li>
            </ul>
        </nav>
    </>
)

export default Nav