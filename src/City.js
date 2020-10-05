import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";

import { actions } from './redux/actions'
import { selectors } from './redux/selectors'

const City = () =>{    
    const data     = useSelector(selectors.getTemp)
    console.log(data)
    if(data.length === 0){
        return <p>Selecione uma area para obter dados climaticos</p>
    }
    if(!data.valid_key){
        return <p>Chave da API HG weather invalida</p>
    }
    return(
        <div className="card" style={city}>            
            <p><b>Cidade:</b> {data.results.city}</p>
            <p><b>Temperatura:</b> {data.results.temp} °C</p>
            <p><b>Umidade:</b> {data.results.humidity} %</p>
            <p><b>Vento:</b> {data.results.wind_speedy}</p>
            <p><b>{data.results.description}</b></p>
        </div>   
    )
}

const city = {
    display: 'block',
    alignItems: 'stretch',
    padding:'20px',
    width: '250px',
    margin: '10px'
};

export default City;