import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";

import { actions } from './redux/actions'
import { selectors } from './redux/selectors'


const Form = () =>{
    const [dados, updateArea]       = useState([])    
    const { register, handleSubmit, watch, errors } = useForm();

    const dispatch = useDispatch()
    const points   = useSelector(selectors.getTasks)
    
    const onSubmit = data => {
        console.log(dados)
        dados.push({local: data, points: points})
        dispatch(actions.addArea(dados))
        updateArea([])
    }


  
    return(

        <form className="card" onSubmit={handleSubmit(onSubmit)} style={form}>        
            <div style={field}>
                <label style={field.label} htmlFor="">Nome da area</label>
                <input disabled={points.length ===0} name="name" style={field.input} ref={register} />
            </div>

            <div style={field}>
                <label style={field.label} htmlFor="">Cultura</label>
                <input disabled={points.length ===0} name="culture" style={field.input} ref={register}/>
            </div>
            <div>
                <ul>
                    {points.map((t, i) => (
                        <li key={i}> {i+1} - lat: {t.lat} - lng: {t.lng}</li>
                    ))}
                </ul>
            </div>
            <div style={footer}>
                <button style={footer.button} disabled={points.length ===0}>Salvar area</button>
            </div>
            {errors.exampleRequired && <span>This field is required</span>}
        </form>  

    )
}

const form = {
    display: 'block',
    alignItems: 'stretch'
};

const field = {
    padding:'20px',
    alignItems: 'stretch',
    input: {
        margin: '10px',
        width: '100%',
        border: '0',
        borderBottom: '2px solid #023e8a',
       
    },
 
    label:{
        margin: '10px'
    }
}

const footer = {
    display: 'flex',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    button: {
        fontSize: '18px',
        backgroundColor: '#023e8a',
        color: 'white',
        padding: '5px',
        textTransform: 'uppercase',
        border:'2px solid #00b4d8',
        borderRadius: '5px',
        "&:disabled":{
            backgroundColor: 'red'
        },
    }
}
export default Form;