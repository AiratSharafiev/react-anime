import React, { FC } from 'react';
import ItemBlock from '../../components/itemBlock/itemBlock';
import { useAppSelector } from '../../app/hooks';
import { useSearchParams } from 'react-router-dom';
import {IResponse, ITopContent} from '../../types/IQuery'
import { limitItem } from '../../constants/constants';

interface IHomePages {
    api: ({searchQuerym, page, limit}: ITopContent) => IResponse
}

const HomePages: FC<IHomePages> = ({ api }) => {
    const limit = limitItem;
    const { page } = useAppSelector(state => state.currentPageReducer);
    const [searchParams] = useSearchParams();
    const searchQuerym = searchParams.get('search') || '';
    
    const { data, isLoading, isError } = api({ searchQuerym, page, limit });
    
    return (
        <ItemBlock itemList={data} isLoading={isLoading} isError={isError}/>
    )
};
export default HomePages;