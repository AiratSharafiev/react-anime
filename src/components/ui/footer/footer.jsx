import React from 'react';
import classes from './footer.module.scss';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={classes.content}>
            <div className='__container'>
                <div className={classes.text}>{year}</div>
            </div>            
        </footer>
    )
};
export default Footer;