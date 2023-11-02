import React from 'react';
import HelperController from './HelperController';
import { Formik,Form,Field,FieldArray} from 'formik';
import * as Yup from 'yup';
import '../CSS/Registration.css'

import {Button, Container,Row} from 'react-bootstrap';

const Registration = () => {
    const initialValues = {
        Name:"",
        Email:"",
        Password:"",
        conformpas:"",
        Phone:"",
        Gender:"",
        Language:[],
        Course:'',
        Social:{
            facebook:"",
            twitter:""
        },
        Phonenumbers:[],
        phNumbers:[""]
    }

    const validationSchema = Yup.object({
        Name:Yup.string().required('Name is required'),
        Email:Yup.string().required("Email is required").email('enter valid email').matches( /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/," not match"),
        Phone:Yup.string().required("Phone number is required").matches(/^[6-9]\d{9}$/,"Please enter valid number"),
        Password:Yup.string().required("password is required").min(6,'Password should be atleast 6 characters long').max(10,"Password should be atleast 6 characters long"),
        conformpas:Yup.string().required("This field is required").min(6,'Password should be atleast 6 characters long').max(10,"Password should be atleast 6 characters long").oneOf([Yup.ref("Password")],"Password Not match"),
        Gender:Yup.string().required("<--select any one of it")
      })

      const handleSubmit = (values) => {
        console.log(values)
    };
    const values = ["M","F"]
    const data = ["HTML","CSS","JS","R_JS"]

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
                            <HelperController Name="conformpas" type="Password" control='input' label="ConformPassword" placeholder="Enter The Password" />
                            <HelperController Name="Phone" type='text' control='input' label="Phonenumber" placeholder="Enter The phonenumber" />
                            <HelperController Name="Gender" type="radio" value={values} control='Radio' label="Gender"  />
                            <HelperController Name="Language" type="checkbox" value={data} control='Radio' label="Language"  />
                            <HelperController Name="Course" type="select " value={data} control='Course' label="Course"  />
                           
                            <HelperController Name="Social.twitter" type="text" id='twitter' control='input' label="Twitter" placeholder="Enter The Twitter Id" />
                            <HelperController Name="Social.facebook" type="text" id="facebook" control='input' label="Facebook" placeholder="Enter The Facebook Id" />

                            <HelperController Name="Phonenumbers[0]" type="text"  control='input' label="Phonenumbers_1" placeholder="Enter The Fist Phonenumbers" />
                            <HelperController Name="Phonenumbers[1]" type="text"  control='input'  label="Phonenumbers_2" placeholder="Enter The Second Phonenumbers" />

                            <div>
                                <label>List of phNumbers</label>
                                <FieldArray name='phNumbers'>
                                    {
                                        (fieldArrayProps)=>{
                                            console.log(fieldArrayProps)
                                            const {push,remove,form}=fieldArrayProps
                                            const {values}=form
                                            const {phNumbers}=values
                                            return(
                                                <div>
                                                    {

                                                        
                                                        phNumbers.map((phNumbers,index)=>(
                                                            <div key={index}>
                                                                <Field name={`phNumbers[${index}]`} />
                                                                
                                                                {
                                                                   index>0 && <Button onClick={()=>remove(index)} className={'m-1'}>-</Button>
                                                                }
                                                                {
                                                                    (index<=3 ) && <Button onClick={()=> push('')} className={'m-1'}>+</Button>
                                                                }
                                                              
                                                                
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>
                            </div>
                            
                        
                            
                           <Button type='submit'>Submit</Button>
                        </Form>
                    )
                }
            </Formik>
        </Row>
        
    </Container>
  )
}

export default Registration