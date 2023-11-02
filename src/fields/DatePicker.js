import React from 'react';
import DateView from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Field,ErrorMessage } from 'formik';

import {Form} from 'react-bootstrap';

function DatePicker(props) {
    const {label,Name,...rest} = props
    
    return (
        <Form.Group  className="mb-2" >
            <Form.Label className='fw-medium' sm="2">
                {label}
            </Form.Label>
            <Form.Control as={Field} name={Name}  >
                {
                    ({form,field})=>{
                        const {setFieldValue} = form
                        const {value} = field
                        return <DateView
                                     id={Name} {...field} {...rest}
                                     selected={value} 
                                     onChange={(val)=>setFieldValue(Name,val)}
                                      />
                    }
                }
            </Form.Control>
            <ErrorMessage name={Name} />
        </Form.Group>
    );
}

export default DatePicker