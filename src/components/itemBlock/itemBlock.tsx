import React, { FC } from 'react';
import Pagination from '../pagination/pagination';
import Spinner from '../ui/spinner/spinner';
import classes from './itemBlock.module.scss';
import { IData } from '../../types/IData';
import NotFound from '../../pages/notFound/notFound';
import Item from './item/item';
import { limitItem } from '../../constants/constants';

interface ItemBlockProps {
    itemList?: IData,
    isLoading?: boolean,
    isError?: boolean
}

const ItemBlock: FC<ItemBlockProps> = ({ itemList, isLoading, isError }) => {

    if (isError) {
        return <NotFound />
    };

    if (isLoading || !itemList) {
        return <Spinner />
    };

    return (
        <div className={classes.item__block}>
            <div className={classes.item__content}>
                <Item item={itemList.data}/>
            </div>
            {limitItem <= itemList.meta.count ? <Pagination allCount={itemList.meta.count} /> : ''}
        </div>
    )
};
export default ItemBlock;