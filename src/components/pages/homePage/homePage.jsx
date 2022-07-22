import React from 'react';
import { Link } from 'react-router-dom';
import useQuery from '../../hooks/query';
import Item from '../../ui/item/item';
import Spinner from '../../ui/spinner/spinner';
import classes from './homePage.module.scss';

const HomePage = ({getData}) => {   
    const limit = 3;

    const popularThisWeek = useQuery(getData.getPopularThisWeek, 0, limit);
    const mostAnticipated = useQuery(getData.getMostAnticipated, 0, limit);
    const mostEvaluated = useQuery(getData.getMostEvaluated, 0, limit);    
    
    if(!popularThisWeek || !mostAnticipated || !mostEvaluated) {
        return <Spinner/>
    };

    return (
        <div className={classes.content}>
            <div className={classes.block}>
                <h4 className={classes.title}>Популярное на этой недели</h4>
                <div className={classes.container}>
                    <Item res={popularThisWeek.data}/>
                </div>
                <Link to={`/trending`} className={classes.link}><span>Показать ещё</span></Link>
            </div>
            <div className={classes.block}>
                <h4 className={classes.title}>Самые ожидаемые</h4>
                <div className={classes.container}>
                    <Item res={mostAnticipated.data}/>
                </div>
                <Link to={`/anticipated`} className={classes.link}><span>Показать ещё</span></Link>
            </div>
            <div className={classes.block}>
                <h4 className={classes.title}>Самые оценённые</h4>
                <div className={classes.container}>
                    <Item res={mostEvaluated.data}/>
                </div>
                <Link to={`/evaluated`} className={classes.link}><span>Показать ещё</span></Link>
            </div>            
        </div>        
    )
};
export default HomePage;    