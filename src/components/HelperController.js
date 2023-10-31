import React from 'react';
import Input from '../fields/Input';
import Radio from '../fields/Radio';
import Dropdown from '../fields/Dropdown';

const HelperController = (props) => {
    const {control,...rest}= props

    

    switch(control){
        case "input" : return <Input {...rest} />
        case "Radio" : return <Radio {...rest} />
        case "Course" : return <Dropdown {...rest} />
        default : return null
    }
}

export default HelperController