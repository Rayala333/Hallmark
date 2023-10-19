import React from 'react';
import { Field,ErrorMessage } from 'formik';

const Radio = (props) => {
    const {label,name,value,...rest} = props
  return (
    
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field  name="picked" value={value} {...rest}/>
              {label}
            </label>
            <ErrorMessage name={name} />
        </div>

  )
}

export default Radio