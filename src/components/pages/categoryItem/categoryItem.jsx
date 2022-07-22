import React from 'react';
import { useParams } from 'react-router-dom';
import useQuery from '../../hooks/query';
import {year, limitItem} from '../../data/data';
import ItemBlock from '../../ui/itemBlock/itemBlock';

const CategoryItem = ({getData, currentPage, setPage}) => {

    const {genre, category} = useParams();  

    const data = [getData.getCategory, getData.getByYear];

    const list = useQuery(data, currentPage, limitItem, genre, false, category, year);    

    return (
        <ItemBlock itemList={list} setPage={setPage} currentPage={currentPage}/>
    )    
};

export default CategoryItem;