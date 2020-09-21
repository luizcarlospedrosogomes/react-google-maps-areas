import React from 'react';

import ReactGoogleMaps from './ReactGoogleMaps'
import Form from './Form'
import Area from './Area'

const containerStyle = {   
  display: 'flex'
};

const map = {
  flex: '1',
  maxWidth: '100%',
  minWidth: '50%',
  margin: '20px'
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
            <Form/>
            <Area/>
        </div>
        
      </div>  
      <button>Clima</button>
    </div>
  )
}


export default App;