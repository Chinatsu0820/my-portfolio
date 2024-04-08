import React from "react";
import ImageEiyoushi from "../../assets/imgs/medical_eiyoushi.png";

export default function Can() {
    return (
        <div className='can-page'>
            <h1>What I can</h1>
            <img className='can-img' src={ImageEiyoushi} alt='This is an image of a nutritionist' />
            <p>I have a nutritionist license</p>
        </div>
    );
}