import React, {useState} from 'react'
import { GoogleMap, LoadScript, DrawingManager  } from '@react-google-maps/api';
import { useDispatch } from 'react-redux'

import { actions } from './redux/actions'

const containerStyle = {
  height: '900px',
  minWidth: '100%',
};

const center = {
    lat: -24.6527377,
    lng: -49.8937037
};


const MyComponent = () => {
    const onLoad = drawingManager => {
       // console.log(drawingManager)
    }
    const [coords, updateTask] = useState([])
    const dispatch = useDispatch()
    
    const onPolygonComplete = polygon => {
        
        let path        = polygon.getPath();
    
        for (var i = 0; i < path.getLength(); i++) {
            coords.push({
                lat: path.getAt(i).lat(),
                lng: path.getAt(i).lng()
            });        
        }        
        dispatch(actions.addTask(coords))
        updateTask([])
    }
    

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBReiWoWGKxq1_9cGgP0HG0S2BfTQIGzaY"
      libraries={["drawing"]}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        <DrawingManager
            onLoad={onLoad}
            onPolygonComplete={onPolygonComplete}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default MyComponent