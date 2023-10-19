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
        Gender:{
            Male:"",
            Female:""
        }
    }

    const validationSchema = Yup.object({
        Name:Yup.string().required('Name is required'),
        Email:Yup.string().required('Email is required').email('Enter Valid Email').matches( /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,"Email valid email only"),
        Password:Yup.string().min(6,'Password should be atleast 6 characters long').max(10,"Password should be atleast 6 characters long")
      })

      const handleSubmit = (values) => {
        console.log(values)
    };

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
                            
                            <HelperController name="Name" type="text" control='input' label="Name" placeholder="Enter The Name" />
                            <HelperController name="Email" type="email" control='input' label="Email" placeholder="Enter The Email" />
                            <HelperController name="Password" type="Password" control='input' label="Password" placeholder="Enter The Password" />
                           <div style={{display:"flex",gap:"20px"}} className='mt-2'>
                                {/* <div id="my-radio-group">Gender</div> */}
                                <HelperController name="Gender.Male" type="radio" control='Radio' label="Male" value="M" aria-labelledby="my-radio-group" />
                                <HelperController name="Gender.Female" type="radio" control='Radio' label="Female" value="F"  aria-labelledby="my-radio-group"/>
                           </div>
                                    
                           
                           
                            
                            
                            
                            <Button type="submit" className='mt-3' >
                                Submit
                            </Button>
                        </Form>
                    )
                }
            </Formik>
        </Row>
        
    </Container>
  )
}

export default Registration