import React from 'react';

import ReactGoogleMaps from './maps/ReactGoogleMaps'

import City from './City'
import Clima from './Clima'

const containerStyle = {   
  display: 'flex'
};

const map = {
  flex: '1',
  maxWidth: '100%',
  minWidth: '50%',
  margin: '20px',
  
};

const form = {    
  margin: '20px'
};

const App = () =>{

  return(
    <div>
      <div style={containerStyle}>
        <div style={map}>
            <ReactGoogleMaps/>
        </div>
        <div style={form}>
            <City/>

        </div>
        
      </div>  
      <Clima/>
    </div>
  )
}


export default App;