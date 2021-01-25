import React from 'react'
import {Field,ErrorMessage} from 'formik'
export const Select = (props) => {
    const {name,label,options} = props
    return (
        <div>
            <label htmlFor="">{label}</label>
            <Field as="select" name={name}  >
                {options.map((option)=>{
                    return(
                        <option key={option.key} value={option.value}>{option.key}</option>
                    )
                })}
            </Field>
            <ErrorMessage name={name} component="span"/>
        </div>
    )
}
