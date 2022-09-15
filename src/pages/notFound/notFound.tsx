import React, { FC } from 'react';
import classes from './notFound.module.scss';

const NotFound: FC = () => {
    return (
        <div className={classes.content}>
            <h2 className={classes.title}>Что пошло не так!</h2>
        </div>
    )
};
export default NotFound;