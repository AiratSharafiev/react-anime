import React, { FC } from 'react';
import { dataApi } from '../../services/DataServices';
import HomePages from './homePages';

const Evaluated: FC = () => {
    const api = dataApi.useGetMostPopularQuery;
    return (
        <HomePages api={api}/>
    )
};
export default Evaluated;