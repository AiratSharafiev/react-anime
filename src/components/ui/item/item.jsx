import React from 'react';
import { Link } from 'react-router-dom';
import classes from './item.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Item = ({ res }) => {
    if (!res.length) {
        return <h2>Ничего не найдено</h2>
    };

    return (
        res.map((item) => {
            const data = item.attributes,
                titles = data.titles.en_jp,
                usTitle = data.titles.en_us,
                canonicalTitle = data.canonicalTitle,
                en = data.titles.en,
                id = item.id,
                type = item.type,
                img = data.posterImage.small,
                raiting = data.averageRating,
                date = parseInt(data.startDate);
            const title = usTitle || titles || en || canonicalTitle;

            return (
                <div
                    key={id}
                    className={classes.item}
                >
                    <Link to={`/id/${type}/${id}`}>
                        <div className={classes.item__img}><img className={classes.img} src={img} alt="img" /></div>
                    </Link>
                    <div className={classes.item__content}>
                        <Link to={`/id/${type}/${id}`} className={classes.item__title}>{title}</Link>
                        <div className={classes.item__text}>
                            {raiting ? <div className={classes.item__raiting}>{<FontAwesomeIcon icon={faStar} className={classes.star} />} {raiting}</div> : ''}
                            <div>{date ? date : '???'}</div>
                        </div>
                    </div>
                </div>
            )
        })
    )
};

export default Item;