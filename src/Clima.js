import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


import {useFetch} from './hooks/useFetch'
import { selectors } from './redux/selectors'
import { actions } from './redux/actions'
import lottie from './lotties/lottie'

const key = '2023fee7'

const Clima = () => {
    const dispatch  = useDispatch()
    const areas     = useSelector(selectors.getTasks)  
     
   
    
    const lat       = (areas.length > 0 ? areas[areas.length-1].lat : null)    
    const lng       = (areas.length > 0 ? areas[areas.length-1].lng : null)    
    
    
    const {data}    = useFetch(`weather?key=${key}&format=json-cors&lat=${lat}&lon=${lng}&user_ip=remote`);

    if(!data){
        return <p>Obtendo dados do clima da região</p>
    }
    if(areas.length === 0){
        return <p>Selecione uma area para obter dados climaticos</p>;
    }

    const {results}  = data
    const {forecast} = results
    dispatch(actions.addTemp(data))

    return (
        <>        
        <div  style={clima}> 
            
            {forecast.map((climate, i )=>(
                <div key={i} className="card-clima" style={card_clima}>
                    <div className="header" style={header}>{climate.date}</div>
                    <div className="body" style={body}>
                        {lottie(climate.condition)}
                    </div>
                    <div className="footer" style={footer}>MIN: {climate.min}°C MAX: {climate.max}°C</div>
               </div>
            ))}
        </div>
        </>
    )
}

const clima ={
    display: 'flex',
    fontSize: '12px',
    padding: '10px',
    margin: '5px',
    justifyContent: 'start',
    alignItems: 'center',
    textAlign: 'center'

}

const card_clima = {    
    flex: '1',
    maxWidth: '10%', 
    margin: '5px',
    justifyContent: 'center',
    alignItems: 'center'
}

const header = {
    border: '1px solid blue',
    borderRadius: '5px'
}

const body = {
    height: '50px', 
    verticalAlign: 'middle'

}

const footer = {
    border: '1px solid blue',
    borderRadius: '5px',
    fontSize: '10px'
}

export default Clima;