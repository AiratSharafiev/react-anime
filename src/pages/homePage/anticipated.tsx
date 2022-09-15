import React, { FC } from 'react';
import { dataApi } from '../../services/DataServices';
import HomePages from './homePages';

const Anticipated: FC = () => {
    const api = dataApi.useGetMostAnticipatedQuery
    return (
        <HomePages api={api}/>
    )
};
export default Anticipated;