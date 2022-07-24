import React, { useEffect, useState } from "react";
import classes from './category.module.scss';
import { NavLink } from 'react-router-dom';
import { categoryGenre as category, year } from '../../data/data';

const Category = ({ genre, menuOpen, toggleClass, closeIconMenu }) => {

    const [menu, setMenu] = useState(classes.category);
    const [navHead, setNavHead] = useState(classes.navHead);
    const [subheadline, setSubheadline] = useState(classes.subheadline);
    const [link, setLink] = useState(classes.link);
    const [borderBottomColor, setBorderBottomColor] = useState('2px solid #176093');

    const closeMenu = () => {
        toggleClass(false);
        closeIconMenu();
    };

    useEffect(() => {
        if (menuOpen) {
            setMenu(classes.category__open);
            setNavHead(classes.navHead__open);
            setSubheadline(classes.subheadline__open);
            setLink(classes.link__open);
            setBorderBottomColor('2px solid #fff')
        } else {
            setMenu(classes.category);
            setNavHead(classes.navHead);
            setSubheadline(classes.subheadline);
            setLink(classes.link);
            setBorderBottomColor('2px solid #176093')
        }
    }, [menuOpen]);

    const setActive = ({ isActive }) => ({ borderBottom: isActive ? borderBottomColor : 'none' });

    return (
        <div className={menu}>
            <div className={subheadline}>
                <span className={navHead}>Жанры</span>
            </div>
            <ul className={classes.category__list}>
                {category.map(item => {
                    return <li
                        key={item.value}
                        id={item.id}
                        category={item.value}><NavLink to={`${genre}/${item.value}`} className={link} style={setActive} onClick={closeMenu}>{item.title}</NavLink></li>
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
        </div>
    )
};

export default Category;
