import React from 'react';
import classes from './notFound.module.scss';

const NotFound = () => {
    return (
        <div className={classes.content}>
            <h2 className={classes.title}>Что пошло не так!</h2>
        </div>
    )
};
export default NotFound;