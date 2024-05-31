import React from 'react'
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
export default function Profile() {

     const initialValues = {
        firstName: '',
        lastName: "",
        education: [{
            uni: "",
            year:""
        }]
    };

    function onSubmit(fields) {
        // display form field values on success
        console.log(fields);
    }

    const addEduc = (v,s)=>{

        let p = {...v};
        p.education.push({
            uni: "",
            year:""
        });

        
    }

  return (
    <div>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({  values, setValues }) => (
        <Form>

            <Field name="firstName"/>
            <Field name="lastName"/>

            <button onClick={()=>{
                addEduc(values,setValues);
            }}>Add More Education</button>

            <FieldArray name="education">
                {() => 
                    (values.education.map((v,i)=>{

                    return (

                        <>
                         <Field name={`education.${i}.uni`} type="text"/>
                         <Field name={`education.${i}.year`} type="text"/>
                        </>
                    )


                    }))

                }

            </FieldArray>

        </Form>
)}

        </Formik>
        

    </div>
  )
}
