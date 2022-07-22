import React, { useState } from 'react';
import Header from '../ui/header/header';
import {Outlet} from 'react-router-dom';
import Category from '../ui/category/category';
import classes from './layout.module.scss';
import SearchPanel from '../ui/searchPanel/searchPanel';
import Footer from '../ui/footer/footer';

const Layout = ({changeGenre, getData, genre}) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [classNameMenu, setAClassNameMenu] = useState('icon-menu');

    const toggleClass = (status) => {
        if(status) {
            setMenuOpen(true);
        } else {
            setMenuOpen(false)
        }
    };

    const iconMenu = () => {
		if (classNameMenu.includes('menu-open')) {
			setAClassNameMenu('icon-menu');
			toggleClass(false);
		} else {
			setAClassNameMenu('icon-menu menu-open');
			toggleClass(true);
		}
    }

    const closeIconMenu = () => {
        setAClassNameMenu('icon-menu');
    };

    return (
        <div className={classes.wrapper}>
            <Header changeGenre={changeGenre} iconMenu={iconMenu} classNameMenu={classNameMenu}/>
            <main className='__container'>
                <SearchPanel getData={getData}/>
                <section className={classes.main_block}>
                    <Outlet />
                    <Category genre={genre} menuOpen={menuOpen} toggleClass={toggleClass} closeIconMenu={closeIconMenu}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
};
export default Layout;