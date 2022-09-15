import { months } from "../constants/constants";
import { IResponse, ITopContent } from "../types/IQuery";
import { limitItemHomePage as limit } from '../constants/constants'

export const getItem = (hook: ({ page, searchQuerym, limit }: ITopContent) => IResponse) => {
    const page = 0;
    const searchQuerym = '';
    const { data, isLoading, isError } = hook({ page, searchQuerym, limit })
    return { data, isLoading, isError }
}

export const addMonth = (str: string): string => {
    const date = new Date(str),
        yaer = date.getFullYear(),
        month = date.getMonth(),
        day = date.getDate()

    return `${day} ${months[month]} ${yaer}г.`
}

export const getLink = (str: string): string => {
    const arr = str.split('/');
    const index = arr.findIndex(item => item === 'edge') + 1;
    return arr.slice(index).join('/')
}