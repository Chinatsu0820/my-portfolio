import React from 'react';
import './Header.css';
import Menu from '../molecules/Menu';

export default function Header() {
    return (
        <header>
           <nav>
            <Menu />
            <p>Here is Nav</p>
           </nav>

           <h1>Here is header</h1>

        </header>
    )
}