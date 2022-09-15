import { IData } from "./IData"

export interface IQuery {
    page: number,
    genre: string | undefined,
    searchQuerym: string
}

export interface ICategory {
    page: number,
    genre: string | undefined,
    searchQuerym: string,
    category: any,
    filter: string
}

export interface IItem {
    type: string | undefined,
    id: string | number | undefined
}

export interface ILink {
    link: string
}

export interface ITopContent {
    searchQuerym: string | null,
    page: number,
    limit: number
}

export interface ISerchPanel {
    limit: number,
    genr: string,
    valueInput: string
}

export interface IResponse {
    data?: IData,
    isLoading?: boolean,
    isError?: boolean
}

export interface ILinkItem {
    linkItem: string
}