import React, {useEffect, useState} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import useQuery from '../../hooks/query';
import Drop from '../drop/drop';
import classes from './searchPanel.module.scss';
import {genr} from '../../data/data';

const SearchPanel = ({getData}) => {
    const [valueInput, setValueInput] = useState('');    
    const [activeDrop, setActiveDrop] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const {pathname} = useLocation();

    useEffect(() => {
        const searchQuerym = searchParams.get('search') || '';
        setValueInput(searchQuerym);
    }, []);
    
    const limitItem = 2;

    const handleSubmit = (e) => {
        e.preventDefault();
        const target = e.target;
        if(target[0].value) {
            const query = target.search.value;
            if(pathname.length > 1) {
                setSearchParams({search: query});
                setActiveDrop(false);
            };
        }        
    };
    
    const searchDropAnime = useQuery(getData.getSaerchRes, 0, limitItem, genr[0], valueInput);
    const searchDropManga = useQuery(getData.getSaerchRes, 0, limitItem, genr[1], valueInput);
    
    const drop = () => {

        if (searchDropAnime && searchDropManga) {
            return (
                <div className={classes.drop}>
                    <div className={classes.drop_list}>
                        <div className={classes.drop_content}>
                            <span className={classes.drop__text}>Результаты поиска</span>
                            <div className={classes.title}>Аниме</div>
                            <Drop item={searchDropAnime.data}/>
                            <div className={classes.title}>Манга</div>
                            <Drop item={searchDropManga.data}/>
                        </div>            
                    </div>
                </div>
            )
        }        
    };

    useEffect(() => {
        setValueInput('');
    }, [pathname]);

    useEffect(() => {
        valueInput ? setActiveDrop(true) : setActiveDrop(false);
    }, [valueInput]);
    
    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <input
                    value={valueInput}
                    onChange={e => setValueInput(e.target.value)}
                    type="search" 
                    name='search'
                    autoComplete='off'
                    className={classes.search}
                    placeholder='Поиск...'/>
                    <input type='submit' value='Поиск' className={classes.button}/>
                    {activeDrop && searchDropAnime ? drop() : ''}
            </form>
        </>
    )
}

export default SearchPanel;