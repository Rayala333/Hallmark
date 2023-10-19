import React from 'react';
import Input from '../fields/Input';
import Radio from '../fields/Radio';

const HelperController = (props) => {
    const {control,...rest}= props

    

    switch(control){
        case "input" : return <Input {...rest} />
        case "Radio" : return <Radio {...rest} />
        default : return null
    }
}

export default HelperController