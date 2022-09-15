import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={styles.content}>
            <div className='__container'>
                <div className={styles.text}>{year}</div>
            </div>            
        </footer>
    )
};
export default Footer;