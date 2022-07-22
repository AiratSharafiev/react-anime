import React from 'react';
import { Link } from 'react-router-dom';
import classes from './drop.module.scss';

const Drop = ({item}) => {
    if(!item.length) {
        return (
            <div className={classes.text}>Ничего не найдено</div>
        )
    };

    return (        
        <div className={classes.drop}>{item.map(item => {
            const data = item.attributes,
                en = data.titles.en,
                titles = data.titles.en_jp,
                usTitle = data.titles.en_us,
                canonicalTitle = data.canonicalTitle,
                img = data.posterImage.tiny,
                id = item.id,
                type = item.type;
            const title = en || titles || usTitle || canonicalTitle;
            
            return (
                <div key={id} className={classes.item}>
                    <Link to={`/id/${type}/${id}`} className={classes.content}>
                        <img src={img} alt='item'/>
                        <div className={classes.text}>{title}</div>
                    </Link>
                </div>                
            )
        })}</div>
    )
};
export default Drop;