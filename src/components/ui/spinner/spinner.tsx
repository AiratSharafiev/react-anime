import React, { FC } from "react";
import classes from './spinner.module.scss';

const Spinner: FC = () => {
    return (
        <div className={classes.item__block}>
            <div className={classes.spinner}>
                <div className={classes.eclipse}>
                    <div className={classes.ldio}>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Spinner;