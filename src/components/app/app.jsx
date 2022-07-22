import React, {useEffect, useState} from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import CategoryItem from '../pages/categoryItem/categoryItem';
import AnimeServices from '../api/services';
import Layout from '../layout/layout';
import PageItem from '../pages/pageItem/pageItem';
import NotFound from '../pages/notFound/notFound';
import Trending from '../pages/homePage/trending';
import Evaluated from '../pages/homePage/evaluated';
import Anticipated from '../pages/homePage/anticipated';
import HomePage from '../pages/homePage/homePage';
import ListItem from '../pages/listItem/listItem';
import '../../style/style.scss';
import '../libs/dynamic_adapt';

function App() {

    const getAni = new AnimeServices();

    const {pathname} = useLocation();    

    const [currentPage, setCurrentPage] = useState(0);
    const [genreActive, setGenreActive] = useState('anime');
    
    const changeGenre = (id) => {
        setGenreActive(id)               
    };

    const setPage = (currentPage) => {
        setCurrentPage(
            currentPage
        )
    };
    
    useEffect(() => {
        setCurrentPage(0);        
    }, [pathname, genreActive]);    
    
    return (
        <Routes>
            <Route path='/' 
                element={<Layout 
                changeGenre={changeGenre} 
                getData={getAni}
                genre={genreActive}/>}>
                <Route path='/' element={<HomePage
                getData={getAni}/>}/>
                <Route path=':genre' element={<ListItem
                    currentPage={currentPage}
                    getData={getAni} 
                    setPage={setPage}/>}/>                         
                <Route path=':genre/:category' element={<CategoryItem 
                    getData={getAni} 
                    setPage={setPage} 
                    currentPage={currentPage} />}/>
                <Route path='/id/:type/:id' element={<PageItem 
                    getAni={getAni}/>}/>
                <Route path='/trending' element={<Trending
                    getAni={getAni}
                    currentPage={currentPage}
                    setPage={setPage}/>}/>
                <Route path='/anticipated' element={<Anticipated
                    getAni={getAni}
                    currentPage={currentPage}
                    setPage={setPage}/>}/>
                <Route path='/evaluated' element={<Evaluated
                    getAni={getAni}
                    currentPage={currentPage}
                    setPage={setPage}/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>            
        </Routes>
    );        
};

export default App;