import { useFormik } from 'formik';
import React from 'react'

export default function Test() {


    const formik = useFormik({
        initialValues: {
          email: 'foobar@example.com',
          password: 'foobar',
        },
        onSubmit: (values) => {
          console.log(values);
        },
      });

  return (
    <div>Test</div>
  )
}
