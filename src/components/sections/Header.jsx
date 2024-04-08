import React from 'react';
import './Header.css';
import Menu from '../molecules/Menu';

export default function Header() {
    return (
        <header>
           <nav>
            <Menu />
           </nav>
        </header>
    )
}