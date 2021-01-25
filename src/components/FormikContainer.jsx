import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

export const FormikContainer = () => {

    const options = [{key:"Select Option",value:""},{key:"option1",value:"OPTION1"},{key:"option2",value:"OPTION2"}]
    const optionsRadio = [{key:"option0",value:"OPTION0"},{key:"option1",value:"OPTION1"},{key:"option2",value:"OPTION2"}]
    const optionsCheckBox = [{key:"option0",value:"OPTION0"},{key:"option1",value:"OPTION1"},{key:"option2",value:"OPTION2"}]
    const initialValues = {
        email: "",
        password:"",
        description:"",
        selectedOption:"",
        selectedRadioOption:"",
        selectedCheckBoxOptions:[]

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required!').email('Invalid E-mail format'),
        password:Yup.string().required('Required!'),
        description:Yup.string().required('Required!'),
        selectedOption:Yup.string().required('Required!'),
        selectedRadioOption:Yup.string().required('Required!'),
        selectedCheckBoxOptions:Yup.array().required('Required!')
    })
    const onSubmit = (props)=>{
        console.log(props)
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                (formik) => {
                    return (
                        <Form>
                            <FormikControl
                                control="input"
                                name="email"
                                label="Email"
                                type="email"
                            />
                            <FormikControl
                                control="input"
                                name="password"
                                label="Password"
                                type="password"
                            />
                            <FormikControl
                                control="textarea"
                                name="description"
                                label="Description"
                                type="textarea"
                            />
                            <FormikControl
                                control="select"
                                name="selectedOption"
                                label="Options"
                                options={options}
                                type="select"
                            />
                             <FormikControl
                                control="radio"
                                name="selectedRadioOption"
                                label="Options2"
                                options={optionsRadio}
                                type="radio"
                            />
                            <FormikControl
                                control="checkbox"
                                name="selectedCheckBoxOptions"
                                label="Options2"
                                options={optionsCheckBox}
                                type="checkbox"
                            />
                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}
