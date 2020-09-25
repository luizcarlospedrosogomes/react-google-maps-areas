import React, { useState } from 'react';

const Clima = () => {
    return (
        <div style={clima}> 
            <div className="card-clima" style={card_clima}>
                <div className="header" style={header}>05/10/2020</div>
                <div className="body" style={body}>CHUVOSO</div>
                <div className="footer" style={footer}>MIN: 12°C MAX: 15°C</div>
            </div>
            <div style={card_clima}>
                <div className="header" style={header}>05/10/2020</div>
                <div className="body" style={body}>CHUVOSO</div>
                <div className="footer" style={footer}>MIN: 12°C MAX: 15°C</div>
            </div>
            <div style={card_clima}>
                <div className="header" style={header}>05/10/2020</div>
                <div className="body" style={body}>CHUVOSO</div>
                <div className="footer" style={footer}>MIN: 12°C MAX: 15°C</div>
            </div>
          
        </div> 
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
    borderRadius: '5px'
}

export default Clima;