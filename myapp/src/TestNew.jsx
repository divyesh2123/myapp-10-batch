import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
export default function TestNew() 
{

  const myYupInformation= Yup.object().shape({
    "firstName": Yup.string().required("firstName is required").min(2,"please enter string of minimum 2 length"),
    "lastName": Yup.string().required("lastName is required").max(13,"please enter string maximum of 12"),
    "gender": Yup.string().required("gender is required"),
    "password": Yup.string().required("please enter password"),
    "confirmPassword": Yup.string().required("confirm password is required").oneOf([null,Yup.ref("password")],"passwors so not match")
  })

  const validate = (data)=>{

    let error= {};

    if(!data.firstName)
    {
      error.firstName = "firstName is required";
    }

    if(!data.lastName)
    {
      error.lastName = "lastName is required"
    }
      
    return error;

  }
  return (
    <Formik
    initialValues={{
        "firstName": "",
        "lastName": "",
        "gender": "",
        "isDisplay": true,
        "color":"",
        "password":"",
        "confirmPassword":""
    }}

    validate={validate}
    onSubmit={(values)=>{
        console.log(values);
    }}
    >
        <Form>
        <Field name="firstName"/>
        <ErrorMessage name="firstName"/>
        <Field name="lastName"/>
        <ErrorMessage name="lastName"/>
       M <Field name="gender" type="radio" value="M"/>
       F <Field name="gender" type="radio" value="F"/>
       <ErrorMessage name="gender"/>
       <Field name="isDisplay" type="checkbox" />
       <Field name="color" as="select">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
       </Field>

      <Field name="password"/>
      <ErrorMessage name='password'/>
      <Field name="confirmPassword"/>
      <ErrorMessage name='confirmPassword'/>
        <input type='submit' value="save"/>
        </Form>
    </Formik>
  )
}
