import React from 'react';
import HomePages from './homePages';

const Evaluated = ({getAni, setPage, currentPage}) => {
    return (
        <HomePages setPage={setPage} currentPage={currentPage} getData={getAni.getMostEvaluated}/>
    )
};
export default Evaluated;