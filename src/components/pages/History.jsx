import React from "react";
import './History.css';

export default function History({ }) {
    return (
        <div className='history-page'>
            <h1>My History</h1>
            <p className='history-year'>2023.05-2024.04</p>
            <p className='history-things'>Studying web Developoment at Tamwood Career college</p>
            <p className='history-year'>2021.04-2023.03 </p>
            <p className='history-things'>Working as a teacher's assistant at a university</p>
            <p className='history-year'>2019.10-2021.03</p>
            <p className='history-things'>Working as a customer support at a company</p>
            <p className='history-year'>2018.04-2019.10</p>
            <p className='history-things'>Working as a dietitian at a hospital</p>
            <p className='history-year'>2014.04-2018.03</p>
            <p className='history-things last'>Studying nutrition at a University</p>
        </div>
    );
}