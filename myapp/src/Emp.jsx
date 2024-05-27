import React from 'react'
import { Formik, Field, Form } from 'formik';
export default function Emp() {
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
        hob:[]
      }}
      onSubmit={(a) => {
       
        console.log(a);
      }}
    >
      <Form>

        
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />


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


        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  )
}
