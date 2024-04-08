import React from "react";
import ImageEiyoushi from "../../assets/imgs/medical_eiyoushi.png";
import ImageEngeneer from "../../assets/imgs/computer_woman.png";
import ImageEnglish from "../../assets/imgs/english_speaking.png";
import "./Can.css";

export default function Can() {
    return (
        <section className='can-page'>
            <h1>What I can & I have</h1>
            <div className='can-page-items'>
                <img className='can-imgs' src={ImageEiyoushi} alt='This is an image illust of a nutritionist' />
                <p>I have a nutritionist license and work experience at a hospital, a company, and an university </p>
            </div>
            <div className='can-page-items'>
                <img className='can-imgs' src={ImageEngeneer} alt='This is an image illust of a front-end engeneer' /> 
                <p>I have learned web development in Canada</p>
            </div>
            <div className='can-page-items'>
                <img className='can-imgs' src={ImageEnglish} alt='This is an image illust speaking English' />
                <p>I can communicate in not only Japanese but also English!</p>
            </div>
        </section>
    );
}