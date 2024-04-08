import React from 'react';
import './Footer.css';
import SnsIcons from '../molecules/SnsIcons';

export default function Footer() {
    return (
        <footer>
           <div className='wrap-snsicon'><SnsIcons /></div>
           <p className='copywrite'>&copy; 2024 Chinatu M. All Rights Reserved.</p>
        </footer>
    )
}