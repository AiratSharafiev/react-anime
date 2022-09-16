import React, {useEffect} from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import CategoryItem from '../../pages/categoryItem/categoryItem';
import Layout from '../layout/layout';
import PageItem from '../../pages/pageItem/pageItem';
import NotFound from '../../pages/notFound/notFound';
import Trending from '../../pages/homePage/trending';
import Evaluated from '../../pages/homePage/evaluated';
import Anticipated from '../../pages/homePage/anticipated';
import HomePage from '../../pages/homePage/homePage';
import ListItem from '../../pages/listItem/listItem';
import '../../style/style.scss';
import '../../helper/libs/dynamic_adapt';
import { currentPageSlice } from '../../store/reducers/currentPage.slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

function App() {

    const {pathname} = useLocation();    

    const {resetCount} = currentPageSlice.actions;
    const {genre} = useAppSelector(state => state.currentGenreReducer)
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(resetCount())
    }, [pathname, genre])
    
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/' element={<Layout />}>                
                <Route path=':genre' element={<ListItem/>}/>                         
                <Route path=':genre/:category' element={<CategoryItem/>}/>
                <Route path='/id/:type/:id' element={<PageItem/>}/>
                <Route path='/trending' element={<Trending/>}/>
                <Route path='/anticipated' element={<Anticipated/>}/>
                <Route path='/evaluated' element={<Evaluated/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>            
        </Routes>
    );        
};

export default App;