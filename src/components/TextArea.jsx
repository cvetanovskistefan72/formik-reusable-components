import React from 'react'
import {Field,ErrorMessage} from 'formik'
export const TextArea = (props) => {
    const {name,type,label} = props
    return (
        <div>
            <label>{label}</label>
            <Field as={type} id={name}  name={name}/>
            <ErrorMessage name={name} component="span"/>
        </div>
    )
}
