import React from 'react';

import { Field,ErrorMessage } from 'formik';

import {Form} from 'react-bootstrap';

const Input = (props) => {
    const {label,name,...rest} = props
  return (
    <Form.Group  className="mb-2" >
        <Form.Label className='fw-medium' sm="2">
            {label}
        </Form.Label>
        <Form.Control as={Field} name={name} {...rest} />
        <ErrorMessage name={name} />
    </Form.Group>
  )
}

export default Input