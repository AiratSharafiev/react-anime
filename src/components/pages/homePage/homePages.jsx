import React from 'react';
import useQuery from '../../hooks/query';
import ItemBlock from '../../ui/itemBlock/itemBlock';
import {limitItem} from '../../data/data';

const HomePages = ({setPage, currentPage, getData}) => {
    const itemList = useQuery(getData, currentPage, limitItem);

    return (
        <ItemBlock itemList={itemList} setPage={setPage} currentPage={currentPage}/>
    )
};
export default HomePages;