import React from "react";
import './style.css';
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
        <nav>
            <h1>Bike Spare Parts</h1>
            <ul>
                <li><Link to ='/main'>Home</Link></li>
                <li><Link to ='/product'>Product</Link></li>
                <li><Link to ='/view'>Cart</Link></li>
                <li><Link to ='/'>Login/SignUp</Link></li>
            </ul>
        </nav>
        </header>
    );
}