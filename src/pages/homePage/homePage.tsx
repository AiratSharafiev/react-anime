import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { getItem } from '../../helper/helper';
import { dataApi } from '../../services/DataServices';
import Item from '../../components/itemBlock/item/item';
import Spinner from '../../components/ui/spinner/spinner';
import classes from './homePage.module.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SwiperBlock from '../../components/swiperblock/swiperblock';
import Category from '../../components/category/category';

const HomePage: FC = () => {
    const popularThisWeek = getItem(dataApi.useGetPopularThisWeekQuery),
        mostAnticipated = getItem(dataApi.useGetMostAnticipatedQuery),
        mostEvaluated = getItem(dataApi.useGetMostEvaluatedQuery),
        mostPopular = getItem(dataApi.useGetMostPopularQuery);

    if (!popularThisWeek || !mostAnticipated || !mostEvaluated || !mostPopular) {
        return <Spinner />
    };

    return (
        <div className="wrapper">
            <Header />
            <main className='main'>
                <section className={classes.swiper}>
                    <SwiperBlock data={mostEvaluated.data} />
                </section>
                <div className='__container'>
                    <section className='main_block'>
                        <div className={classes.content}>
                            <div className={classes.block}>
                                <h4 className={classes.title}>Популярное на этой недели</h4>
                                <div className={classes.container}>
                                    <Item item={popularThisWeek.data?.data} />
                                </div>
                                <Link to={`/trending`} className={classes.link}><span>Показать ещё</span></Link>
                            </div>
                            <div className={classes.block}>
                                <h4 className={classes.title}>Самые ожидаемые</h4>
                                <div className={classes.container}>
                                    <Item item={mostAnticipated.data?.data} />
                                </div>
                                <Link to={`/anticipated`} className={classes.link}><span>Показать ещё</span></Link>
                            </div>
                            <div className={classes.block}>
                                <h4 className={classes.title}>Самые оценённые</h4>
                                <div className={classes.container}>
                                    <Item item={mostPopular.data?.data} />
                                </div>
                                <Link to={`/evaluated`} className={classes.link}><span>Показать ещё</span></Link>
                            </div>
                        </div>
                        <Category />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
        
    )
};
export default HomePage;    