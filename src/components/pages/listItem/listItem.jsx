import React from 'react';
import { useParams } from 'react-router-dom';
import useQuery from '../../hooks/query';
import ItemBlock from '../../ui/itemBlock/itemBlock';
import NotFound from '../notFound/notFound';
import {genr, limitItem} from '../../data/data';

const ListItem = ({getData, currentPage, setPage}) => {

    const {genre} = useParams();  
    
    const itemList = useQuery(getData.getData, currentPage, limitItem, genre);

    if (!genr.includes(genre)) {
        return <NotFound/>
    };
    
    return (
        <ItemBlock itemList={itemList} setPage={setPage} currentPage={currentPage}/>
    )
}
export default ListItem;