import React from "react";
import './Home.css';
import Welcomeimg from '../../assets/imgs/akazukinchan.png';
import Tooltip from '../js-component/Tooltip';

export default function Home({ }) {
    return (
        <div className='home-page'> 
            <h1> Welcome to my website!</h1>
            <Tooltip className='home-img' imageUrl={Welcomeimg}/>
        </div>
            );
}