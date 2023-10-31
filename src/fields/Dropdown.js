import React from 'react';
import {Form} from 'react-bootstrap';
import { Field,ErrorMessage } from 'formik';

const Dropdown = (props) => {
    const {label,Name,value,type,...rest} = props
  return (
    <Field className='mb-3' as={Form.Select} name={Name}>
        <option>--Select--</option>
    {
        value.map((e,i)=>(
            <option className='m-2'  key={i} value={e}  {...rest}>{e}</option>
        ))
    }
    </Field>
  )
}

export default Dropdown