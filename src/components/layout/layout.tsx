import React, { FC } from 'react';
import Header from '../header/header';
import {Outlet} from 'react-router-dom';
import Category from '../category/category';
import Footer from '../footer/footer';
const Layout: FC = () => {

    return (
        <div className="wrapper">
            <Header/>
            <main className='main'>
                <div className='__container'>
                    <section className='main_block'>
                        <Outlet />
                        <Category/>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    )
};
export default Layout;