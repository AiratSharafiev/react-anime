import React from 'react';
import HomePages from './homePages';

const Anticipated = ({getAni, setPage, currentPage}) => {
    return (
        <HomePages setPage={setPage} currentPage={currentPage} getData={getAni.getMostAnticipated}/>
    )
};
export default Anticipated;