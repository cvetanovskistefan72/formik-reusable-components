import { ErrorMessage, Field } from 'formik'
import React from 'react'

export const CheckBox = (props) => {
    const { label, name, type, options } = props

    return (
        <div>
            <label>{label}: </label>
            <Field name={name} id={name} >
                {
                    ({ field }) => {
                        console.log(field)

                        return options.map((option) => {
                            return (<React.Fragment key={options.key}>
                                <label>{option.key}</label>
                                <input
                                    type={type}
                                    {...field}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                            </React.Fragment>)
                        })

                    }
                }
            </Field>
            <ErrorMessage name={name} component="span" />
        </div>
    )
}
