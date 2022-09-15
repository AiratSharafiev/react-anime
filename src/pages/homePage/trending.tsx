import React, { FC } from 'react';
import { dataApi } from '../../services/DataServices';
import HomePages from './homePages';

const Trending: FC = () => {
    const api = dataApi.useGetPopularThisWeekQuery
    return (
        <HomePages api={api}/>
    )
};
export default Trending;