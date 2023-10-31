import React from 'react';
import { Field,ErrorMessage } from 'formik';

const Radio = (props) => {
    const {label,Name,value,...rest} = props
  return (
    
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              {label}<br></br>
              {
                value.map((e,i)=>(
                  <div key={i}>
                  <Field  name={Name} value={e} {...rest}/>
                  {e}
                  </div>
                ))
              }
    
            </label>
            <ErrorMessage name={Name} />
        </div>

  )
}

export default Radio