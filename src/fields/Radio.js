import React from 'react';
import { Field,ErrorMessage } from 'formik';

import {Form} from 'react-bootstrap';

const Radio = (props) => {
    const {label,Name,value,type,...rest} = props
  return (
   
                <Form.Group  className="mb-1" >
                    <Form.Label className='fw-medium' sm="2" >
                        {label}
                    </Form.Label>
                    {
                    value.map((e,i)=>(
                          <Form.Check inline as={Field} key={i} name={Name} value={e} type={type} {...rest} label={e} className='mx-3' />
                    ))
                  }

                  <ErrorMessage name={Name} as={<div/>}/>
              </Form.Group>

  )
}

export default Radio