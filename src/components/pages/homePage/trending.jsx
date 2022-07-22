import React from 'react';
import HomePages from './homePages';

const Trending = ({getAni, setPage, currentPage}) => {
    return (
        <HomePages setPage={setPage} currentPage={currentPage} getData={getAni.getPopularThisWeek}/>
    )
};
export default Trending;