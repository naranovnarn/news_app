import React from 'react';
import './Button.css';

const Button = (props) => {

    const { type, onClick, disabled } = props

    const cls = ['Button ', type];

    return (
        <button
            onClick={onClick}
            className={cls.join('')}
            disabled={disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;