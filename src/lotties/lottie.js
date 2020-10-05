import React, { useState } from 'react';
import Lottie from 'react-lottie';

import storm from './storm_hard.json';
import clear_day from './sun.json';
import cloudly_day from './misty.json';
import cloud from './cloud.json';
import hail from './hail.json';
import clear_night from './clear_night.json';

const iconConditions = (condition) => {
    console.log(condition)
    const defaultOptions = {
        loop: true,
        autoplay: true,         
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };
    switch (condition) {
        case "storm":
        case "rain":
            defaultOptions.animationData = storm
        break;
        case "clear_day":
            defaultOptions.animationData = clear_day
        break;
        case "cloudly_day":
            defaultOptions.animationData = cloudly_day
        break;
        case "cloud":
            defaultOptions.animationData = cloud
        break;
        case "hail":
            defaultOptions.animationData = hail
        break;
        case "clear_night":
            defaultOptions.animationData = clear_night
        break;
       
        default:
            break;
   }
   console.log(defaultOptions)
   return    <Lottie options={defaultOptions}   width={50} height={50}/>  
}


export default iconConditions