import React, { FC } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ItemBlock from '../../components/itemBlock/itemBlock';
import { useAppSelector } from '../../app/hooks';
import { dataApi } from '../../services/DataServices';
import { year } from '../../constants/constants';

const CategoryItem: FC = () => {

    const {genre, category} = useParams();     
    const [searchParams] = useSearchParams();  
    const searchQuerym = searchParams.get('search') || '';
    const { page } = useAppSelector(state => state.currentPageReducer);
    let filter = 'categories';
    
    if(year.find(item => item.adress === category)) {
        filter = 'year'
    }
    
    const { data, isLoading, isError } = dataApi.useGetCategoryQuery({ page, genre, searchQuerym, category, filter });
    
    return (
        <ItemBlock itemList={data} isLoading={isLoading} isError={isError}/>
    )    
};

export default CategoryItem;