import React from 'react'
import { Field,ErrorMessage } from 'formik'
export const Input = (props) => {
    
    const {name,label} = props
     
    return (
        <div>
            <label>{label}</label>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h6>Dasdadadsd</h6>
            <Field id={name} name={name}   />
            <ErrorMessage name={name} component="span"/>
        </div>
    )
}
