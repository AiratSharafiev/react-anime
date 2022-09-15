import React, { FC } from 'react';
import { genr } from '../../../constants/constants';
import Drop from './drop/drop';
import classes from './dropList.module.scss';

interface IDropList {
    valueInput: string
}

const DropList: FC<IDropList> = ({ valueInput }) => {

    return (
        <div className={classes.drop}>
            <div className={classes.drop_list}>
                <div className={classes.drop_content}>
                    <span className={classes.drop__text}>Результаты поиска</span>
                    <div className={classes.title}>Аниме</div>
                    <Drop genr={genr.anime} valueInput={valueInput} />
                    <div className={classes.title}>Манга</div>
                    <Drop genr={genr.manga} valueInput={valueInput} />
                </div>
            </div>
        </div>
    )

};

export default DropList

