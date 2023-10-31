import React from 'react';

import { Field,ErrorMessage } from 'formik';

import {Form} from 'react-bootstrap';

const Input = (props) => {
    const {label,Name,...rest} = props
  return (
    <Form.Group  className="mb-2" >
        <Form.Label className='fw-medium' sm="2">
            {label}
        </Form.Label>
        <Form.Control as={Field} name={Name} {...rest} />
        <ErrorMessage name={Name} />
    </Form.Group>
  )
}

export default Input