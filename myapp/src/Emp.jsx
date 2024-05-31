import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
export default function Emp() {


  const validationSchema1 = Yup.object().shape({
    firstName:Yup.string().required("Please Enter firstName").min(2,"Please enter valid string").max(10,"please enter valid string"),
    email: Yup.string().email("Please enter valid email"),
    password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    accept: Yup.bool().oneOf([true], 'Accept Terms is required'),

  })

  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: 'xzd',
        email: '',
        city:'',
        educationlevel:'',
        accept:false,
        hob:[],
        password: "",
        confirmPassword:""

      }}
      validationSchema={validationSchema1}
      onSubmit={(a) => {
       
        console.log(a);
      }}
    >
      <Form>

        
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

      <ErrorMessage name='firstName' component="div"/>
        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

<Field name="city" as="select">
   <option value="VAD">Vadodara</option>
   <option value="SUT">Surat</option>
   <option value="PU">Pune</option>
 </Field>

 <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="educationlevel" value="master" />
              master
            </label>
            <label>
              <Field type="radio" name="educationlevel" value="bach" />
              bach
            </label>
            
          </div>

          <label>
            <Field type="checkbox" name="accept" />
         
          </label>

          <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="hob" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="hob" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="hob" value="Three" />
              Three
            </label>
          </div>

          <label htmlFor="password">Password</label>
        <Field type="password" id="password" name="password" placeholder="Jane" />

      <ErrorMessage name='password' component="div"/>

      <label htmlFor="confirmPassword">Confirm Password</label>
        <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Jane" />

      <ErrorMessage name='confirmPassword' component="div"/>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  )
}
