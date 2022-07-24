import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../item/item';
import Spinner from '../spinner/spinner';
import Pagination from '../../ui/pagination/pagination';

const SearchList = ({getSaerchRes, limitItem}) => {
    const [searchList, setSearchList] = useState(null);
    const [currentPage, setCurrentPage] = useState(0)

    const {title} = useParams();

    useMemo(() => {          
        getSaerchRes(title, currentPage)
            .then( (itemList) => (
                setSearchList({...itemList.data})            
            ))
    }, [currentPage, getSaerchRes, title]);

    if(!searchList) {
        return <Spinner/>
    };    

    const setPage = (currentPage) => {
        setCurrentPage(
            currentPage
        )
    };

    return (
        <div className='item__block'>
            {searchList.data.length ? 
            <>
                <Item res={searchList.data}/>
                <Pagination allCount={searchList.meta.count} setPage={setPage} currentPage={currentPage} limitItem={limitItem}/>
            </> : 
            <div><h2>Ничего не найдено</h2></div>}
            
        </div>
    )
};
export default SearchList;