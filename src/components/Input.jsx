import React from 'react'
import { Field,ErrorMessage } from 'formik'
export const Input = (props) => {
    
    const {name,label} = props
     
    return (
        <div>
            <label>{label}</label>
            <Field id={name} name={name}   />
            <ErrorMessage name={name} component="span"/>
        </div>
    )
}
