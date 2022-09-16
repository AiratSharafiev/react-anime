import React, { FC, useEffect, useState } from "react";
import classes from './category.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from "../../app/hooks";
import { setMenuSlice } from "../../store/reducers/setMenu.slice";
import { useDispatch } from "react-redux";
import { currentGenreSlice } from "../../store/reducers/currentGenre.slice";
import { categoryGenre as categories, year } from "../../constants/constants";

const Category: FC = () => {

    const [menu, setMenu] = useState<string>(classes.category);
    const [navHead, setNavHead] = useState<string>(classes.navHead);
    const [subheadline, setSubheadline] = useState<string>(classes.subheadline);
    const [link, setLink] = useState<string>(classes.link);
    const [isHomePage, setIsHomePage] = useState<boolean>(true)
    const [borderBottomColor, setBorderBottomColor] = useState<string>('2px solid #176093');
    const { genre } = useAppSelector(state => state.currentGenreReducer);
    const { menuOpen } = useAppSelector(state => state.setMenuReducer);
    const { toggleClass, closeIconMenu } = setMenuSlice.actions;
    const { setCurrentGenre } = currentGenreSlice.actions;
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    const closeMenu = () => {
        dispatch(toggleClass(false));
        dispatch(closeIconMenu());
    };

    useEffect(() => {
        if (pathname === '/' && !menuOpen) {
            setIsHomePage(true)
        } else {
            setIsHomePage(false)
        }
    }, [pathname, menuOpen]);

    useEffect(() => {
        if (menuOpen) {
            setMenu(classes.category__open);
            setNavHead(classes.navHead__open);
            setSubheadline(classes.subheadline__open);
            setLink(classes.link__open);
            setBorderBottomColor('2px solid #fff');
        } else {
            setMenu(classes.category);
            setNavHead(classes.navHead);
            setSubheadline(classes.subheadline);
            setLink(classes.link);
            setBorderBottomColor('2px solid #176093');
        }
    }, [menuOpen]);

    const genreActive = (e: React.MouseEvent): void => {
        dispatch(setCurrentGenre(e.currentTarget.id));
        closeMenu()
    };

    const setActive = ({ isActive }: { isActive: boolean }) => ({ borderBottom: isActive ? borderBottomColor : 'none' });

    return (
        <>
            {!isHomePage && <div className={menu}>
                <ul className={subheadline}>
                    {menuOpen && <li><NavLink
                        to='/anime'
                        className={classes.menu__link}
                        style={setActive}
                        id='anime'
                        onClick={genreActive}>Аниме</NavLink></li>}
                    {menuOpen && <li><NavLink
                        to='/manga'
                        className={classes.menu__link}
                        style={setActive}
                        id='manga'
                        onClick={genreActive}>Манга</NavLink></li>}
                    <li className={navHead}>Жанры</li>
                </ul>
                <ul className={classes.category__list}>
                    {categories.map(item => {
                        const category = { category: item.value }
                        return <li
                            key={item.value}
                            id={item.id}
                            {...category}><NavLink to={`${genre}/${item.value}`} className={link} style={setActive} onClick={closeMenu}>{item.title}</NavLink></li>
                    })}
                </ul>
                <div className={subheadline}>
                    <span className={navHead}>Сезон</span>
                </div>
                <ul className={classes.category__list}>
                    {year.map((item, index) => {
                        return <li
                            key={index}
                        ><NavLink to={`${genre}/${item.adress}`} className={link} style={setActive} onClick={closeMenu}>{item.years}</NavLink></li>
                    })}
                </ul>
            </div>}
        </>
    )
};

export default Category;
