export const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

export interface ICategoryGenre {
    id: string,
    title: string,
    value: string
}

export interface IYear {
    years: string,
    adress: string
}

export const categoryGenre: ICategoryGenre[] = [
    {id: 'category1', title: 'Cёнен', value: 'Shounen'},
    {id: 'category2', title: 'Космос', value: 'Space'},
    {id: 'category3', title: 'Магия', value: 'Magic'},
    {id: 'category4', title: 'Пародия', value: 'Parody'},
    {id: 'category5', title: 'Фэнтези', value: 'Fantasy'},
];

export const year: IYear[] = [
    {years: '2022', adress: '2022'},
    {years: '2021', adress: '2021'},
    {years: '2019-2020', adress: '2019..2020'},
    {years: '2014-2018', adress: '2014..2018'},
    {years: '2000-2013', adress: '2000..2013'},
    {years: '1990e', adress: '1990..1999'},
    {years: '1980e', adress: '1980..1989'}
];    

interface IGenr {
    anime: string,
    manga: string
}

export const genr: IGenr = {
    anime: 'anime',
    manga: 'manga'
};

export const limitItem = 9;

export const limitItemHomePage = 8;

export const limitItemDrop = 2;

export const maxPage = 5;