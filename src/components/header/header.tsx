import React, { FC } from 'react';
import classes from './header.module.scss';
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentGenreSlice } from '../../store/reducers/currentGenre.slice';
import { useAppSelector } from '../../app/hooks';
import { setMenuSlice } from '../../store/reducers/setMenu.slice';
import SearchPanel from '../searchPanel/searchPanel';

const Header: FC = () => {
    const dispatch = useDispatch();
    const {setCurrentGenre} = currentGenreSlice.actions;
    const {classNameMenu} = useAppSelector(state => state.setMenuReducer);
    const {iconMenu} = setMenuSlice.actions;
    const openMenu = (): void => {
        dispatch(iconMenu());
    };

    const genreActive = (e: React.MouseEvent): void => {
        dispatch(setCurrentGenre(e.currentTarget.id));
    };
    
    const setActive = ({isActive}: {isActive: boolean}) => ({borderBottom: isActive ? '2px solid #fff' : 'none'});

    return (
        <>
            <header className={classes.header}>
                <div className='__container'>
                    <div className={classes.content}>
                        <NavLink to='/' className={classes.logo}><span className={classes.logo_white}>MORE</span>ANIME</NavLink>
                        <SearchPanel/>
                        <div className={classes.menu}>
                            <NavLink
                                to='/anime' 
                                className={classes.menu__link}                                
                                style={setActive}
                                id='anime'
                                onClick={genreActive}>Аниме</NavLink>
                            <NavLink 
                                to='/manga' 
                                className={classes.menu__link}               
                                style={setActive}
                                id='manga'
                                onClick={genreActive}>Манга</NavLink>    
							<button type="button" className={classNameMenu} onClick={openMenu}>
								<span></span>
								<span></span>
								<span></span>
							</button>                                
                        </div> 
                    </div>                    
                </div>            
            </header>
        </>
        
    )
};
export default Header;