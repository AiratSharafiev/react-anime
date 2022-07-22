import axios from 'axios';

export default class AnimeServices {
    constructor() {
        this._apiBase = 'https://kitsu.io/api/edge';
    };

    async getAll(url) {
        try {
            const response = await axios.get(`${this._apiBase}${url}`);
            return await response;
        } catch (error) {
            console.log(error);
        }
    };

    async getlink(url) {
        try {
            const response = await axios.get(url);
            return await response;
        } catch (error) {
            console.log(error);
        }
    };

    checkQuerym = async (page, limit, searchQuerym, url) => {
        const pages = page * limit;
        if (searchQuerym) {
            return await this.getAll(url[0] + `&page%5Boffset%5D=${pages}`);
        } else {
            return await this.getAll(url[1] + `&page%5Boffset%5D=${pages}&sort=-user_count`);
        };
    };

    getSaerchRes = async (pages = 0, limit, genre, title, ...args) => {
        const res = await this.getAll(`/${genre}?filter[text]=${title}&page%5Blimit%5D=${limit}&page%5Boffset%5D=${pages}`);
        return res;
    };

    getCategory = async (page, limit = 6, genre, searchQuerym, category) => {
        const pathWithTitle = `/${genre}?filter[text]=${searchQuerym}&filter%5Bcategories%5D=${category}&page%5Blimit%5D=${limit}`;
        const path = `/${genre}?filter%5Bcategories%5D=${category}&page%5Blimit%5D=${limit}`;
        return await this.checkQuerym(page, limit, searchQuerym, [pathWithTitle, path]);
    };

    getData = async (page, limit = 6, genre, searchQuerym, ...args) => {
        const pathWithTitle = `/${genre}?filter[text]=${searchQuerym}&page[limit]=${limit}`;
        const path = `/${genre}?page[limit]=${limit}`;
        return await this.checkQuerym(page, limit, searchQuerym, [pathWithTitle, path]);
        
    };

    getById = async (genre, id) => {
        return await this.getAll(`/${genre}?filter[id]=${id}`);
    };

    getByYear = async (page, limit = 6, genre, searchQuerym, category) => {
        const pathWithTitle = `/${genre}?filter[text]=${searchQuerym}&filter[year]=${category}&page%5Blimit%5D=${limit}`;
        const path = `/${genre}?filter[year]=${category}&page%5Blimit%5D=${limit}`;
        return await this.checkQuerym(page, limit, searchQuerym, [pathWithTitle, path]);
    };
    getCharacter = async (id) => {
        return await this.getAll(`/media-characters/${id}/character`);
    };
    
    getPopularThisWeek = async (page, limit, searchQuerym = null) => {
        const pathWithTitle = `/anime?filter%5Bstatus%5D=current&filter[text]=${searchQuerym}&page[limit]=${limit}&sort=-user_count`;
        const path = `/anime?filter%5Bstatus%5D=current&page[limit]=${limit}&sort=-user_count`;
        return await this.checkQuerym(page, limit, searchQuerym, [pathWithTitle, path]);
    };
    
    getTopExpected = async (page, limit) => {
        return await this.getAll(`/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=${limit}&sort=-user_count`);
    };

    getMostAnticipated = async (page, limit, searchQuerym = null) => {
        const pathWithTitle = `/anime?filter%5Bstatus%5D=upcoming&filter[text]=${searchQuerym}&page[limit]=${limit}&sort=-user_count`;
        const path = `/anime?filter%5Bstatus%5D=upcoming&page[limit]=${limit}&sort=-user_count`;
        return await this.checkQuerym(page, limit, searchQuerym, [pathWithTitle, path]);
    };

    getMostEvaluated  = async (page, limit, searchQuerym = null) => {
        const pathWithTitle = `/anime?filter[text]=${searchQuerym}&page[limit]=${limit}&sort=-average_rating`;
        const path = `/anime?page[limit]=${limit}&sort=-average_rating`;
        return await this.checkQuerym(page, limit, searchQuerym, [pathWithTitle, path]);
    };
};