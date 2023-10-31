import React from 'react';
import HelperController from './HelperController';
import { Formik,Form} from 'formik';
import * as Yup from 'yup';
import '../CSS/Registration.css'

import {Button, Container,Row} from 'react-bootstrap';

const Registration = () => {
    const initialValues = {
        Name:"",
        Email:"",
        Password:"",
        Gender:""
    }

    const validationSchema = Yup.object({
        Name:Yup.string().required('Name is required'),
        Email:Yup.string().required("Email is required").email('enter valid email').matches( /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/," not match"),
        Password:Yup.string().min(6,'Password should be atleast 6 characters long').max(10,"Password should be atleast 6 characters long")
      })

      const handleSubmit = (values) => {
        console.log(values)
    };
    const values = ["M","F"]

  return (
    <Container>
        <Row>
            <h1 className='hedding'>Regastration</h1><hr></hr>
        </Row>
        <Row>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} >
                {
                    (formik)=>(
                        <Form>
                            
                            <HelperController Name="Name" type="text" control='input' label="Name" placeholder="Enter The Name" />
                            <HelperController Name="Email" type='email' control='input' label="Email" placeholder="Enter The Email" />
                            <HelperController Name="Password" type="Password" control='input' label="Password" placeholder="Enter The Password" />
                            <HelperController Name="Gender" type="radio" value={values} control='Radio' label="Gender"  />
                        
                                    
                           <input type='submit' value='submit' />
                        </Form>
                    )
                }
            </Formik>
        </Row>
        
    </Container>
  )
}

export default Registration