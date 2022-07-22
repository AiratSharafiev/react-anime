import React from 'react';
import Item from '../item/item';
import Pagination from '../pagination/pagination';
import Spinner from '../spinner/spinner';
import classes from './itemBlock.module.scss';
import {limitItem} from '../../data/data';

const ItemBlock = ({itemList, setPage, currentPage}) => {
    if(!itemList) {
        return <Spinner/>
    };
    
    return (
        <div className={classes.item__block}>
            <div className={classes.item__content}>
                <Item res={itemList.data}/>
            </div>
            {limitItem <= itemList.meta.count ? <Pagination allCount={itemList.meta.count} setPage={setPage} currentPage={currentPage}/> : ''}            
        </div>        
    )
};
export default ItemBlock;