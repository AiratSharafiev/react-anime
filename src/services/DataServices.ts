import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { limitItem } from '../constants/constants';
import { IData, IDataCategory, IDataCharacter } from '../types/IData';
import { ICategory, IQuery, IItem, ITopContent, ISerchPanel } from '../types/IQuery';

export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://kitsu.io/api/edge' }),
    endpoints: (build) => ({
        getListItem: build.query<IData, IQuery>({
            query: ({ page, genre, searchQuerym }) => ({
                url: `/${genre}${searchQuerym ? `?filter[text]=${searchQuerym}&` : '?'}page[limit]=${limitItem}&page%5Boffset%5D=${page * limitItem}${!searchQuerym && `sort=-user_count`}`
            }),
        }),
        getCategory: build.query<IData, ICategory>({
            query: ({ page, genre, searchQuerym, category, filter }) => ({
                url: `/${genre}${searchQuerym ? `?filter[text]=${searchQuerym}&` : '?'}filter[${filter}]=${category}&page[limit]=${limitItem}&page%5Boffset%5D=${page * limitItem}${!searchQuerym && `sort=-user_count`}`
            })
        }),
        getById: build.query<IData, IItem>({
            query: ({ type, id }) => ({
                url: `/${type}?filter[id]=${id}`
            })
        }),
        getLink: build.query<IDataCategory, string>({
            query: linkItem => ({
                url: `/${linkItem}`
            })
        }),
        getLinkItem: build.query<IDataCharacter, string>({
            query: linkItem => ({
                url: `/${linkItem}`
            })
        }),
        getPopularThisWeek: build.query<IData, ITopContent>({
            query: ({page, searchQuerym, limit}) => ({
                url: `anime?filter%5Bstatus%5D=current${searchQuerym && `&filter[text]=${searchQuerym}`}&page[limit]=${limit}&page%5Boffset%5D=${page * limit}&sort=-user_count`
            })
        }),
        getMostAnticipated: build.query<IData, ITopContent>({
            query: ({page, searchQuerym, limit}) => ({
                url: `anime?filter%5Bstatus%5D=upcoming${searchQuerym && `&filter[text]=${searchQuerym}`}&page[limit]=${limit}&page%5Boffset%5D=${page * limit}&sort=-user_count`
            })
        }),
        getMostEvaluated: build.query<IData, ITopContent>({
            query: ({page, searchQuerym, limit}) => ({
                url: `anime${searchQuerym ? `?filter[text]=${searchQuerym}&` : '?'}page[limit]=${limit}&page%5Boffset%5D=${page * limit}&sort=-user_count`
            })
        }),
        getMostPopular: build.query<IData, ITopContent>({
            query: ({page, searchQuerym, limit}) => ({
                url: `anime${searchQuerym ? `?filter[text]=${searchQuerym}&` : '?'}page[limit]=${limit}&page%5Boffset%5D=${page * limit}&sort=-average_rating`
            })
        }),
        getSaerchRes: build.query<IData, ISerchPanel>({
            query: ({limit, genr, valueInput}) =>({
                url: `/${genr}?filter[text]=${valueInput}&page%5Blimit%5D=${limit}`
            })
        })
    })
})

export const { useGetListItemQuery, useGetCategoryQuery, useGetByIdQuery, useGetLinkQuery, useGetPopularThisWeekQuery, useGetMostAnticipatedQuery, useGetMostEvaluatedQuery, useGetSaerchResQuery, useGetLinkItemQuery, useGetMostPopularQuery } = dataApi;
