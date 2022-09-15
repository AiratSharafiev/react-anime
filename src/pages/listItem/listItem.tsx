import React, { FC } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ItemBlock from '../../components/itemBlock/itemBlock';
import { dataApi } from '../../services/DataServices';
import { useAppSelector } from '../../app/hooks';

const ListItem: FC = () => {
    const [searchParams] = useSearchParams();
    const searchQuerym = searchParams.get('search') || '';
    const { page } = useAppSelector(state => state.currentPageReducer);
    const { genre } = useParams();
    const { data, isLoading, isError } = dataApi.useGetListItemQuery({ page, genre, searchQuerym });

    return (
        <>
            <ItemBlock itemList={data} isLoading={isLoading} isError={isError}/>
        </>
    )

    
}
export default ListItem;