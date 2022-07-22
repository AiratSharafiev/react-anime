import React from 'react';
import classes from './pagination/css/button.module.scss';

const Button = ({children, ...props}) => {
    return (
        <div className={classes.button_content}>
        <span {...props} className={classes.button}>{children}</span></div>
    )
};
export default Button;