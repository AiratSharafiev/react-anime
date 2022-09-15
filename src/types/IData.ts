interface ITitles {
    en_jp: string,
    en_us: string,
    en: string
}

interface IAttributes {
    titles: ITitles,
    canonicalTitle: string,
    posterImage: {small: string, tiny: string},
    averageRating: string,
    startDate: string,
    endDate: string,
    episodeCount: number,
    showType: string,
    episodeLength: string | number,
    description: string,
    ageRatingGuide: string,
    createdAt: string,
    coverImage: {large: string}
}

interface ICharacters {
    characters: {links: {related: string}},
    categories: {links: {related: string}}
}

export interface IDataArray {
    attributes: IAttributes,
    id: string | number,
    type: string,
    relationships: ICharacters
}

export interface IData {
    data: IDataArray[],
    meta: {count: number}
}

interface IDataCategoryArray {
    attributes: IDataCategoryAttributes,
    id: string | number,
    relationships: {character: {links: {related: string}}}
}

interface IDataCategoryAttributes {
    title: string,
    role: string,
    canonicalName: string
}

export interface IDataCategory {
    data: IDataCategoryArray[]
}

export interface IDataCharacter {
    data: {attributes: {canonicalName: string, image: {original: string}}}
}