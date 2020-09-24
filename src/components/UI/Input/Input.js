import React from 'react';
import './Input.css';

const Input = (props) => {

    const { inputType = 'text', label, value, onChange, errorMessage, isValid } = props;

    const cls = ['Input'];

    if ( isValid ) {
        cls.push('invalid');
    }

    const htmlFor = `${ inputType } - ${ Math.random() }`

    return (
        <div className={ cls.join(' ')}>
            <label htmlFor={ htmlFor } >{ label }</label>
            <input 
                type={ inputType }
                id={htmlFor}
                value={ value }
                onChange={ onChange }
            />
            <span>{errorMessage }</span>
        </div>
    );
};

export default Input;