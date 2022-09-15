import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IDataArray } from '../../../types/IData';
import classes from './item.module.scss';
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ItemProps {
    item?: IDataArray[]
}

const Item: FC<ItemProps> = ({ item }) => {
    if(!item) {
        return (
            <></>
        )
    }
    if (!item.length) {
        return <h2>Ничего не найдено</h2>
    };

    return (
        <>
            {item.map((item) => {
                const data = item.attributes,
                    titles = data.titles.en_jp,
                    usTitle = data.titles.en_us,
                    canonicalTitle = data.canonicalTitle,
                    en = data.titles.en,
                    id = item.id,
                    type = item.type,
                    img = data.posterImage.small,
                    raiting = data.averageRating,
                    date = parseInt(data.startDate),
                    createdAt = parseInt(data.createdAt);
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
                                {raiting ? <div className={classes.item__raiting}><FontAwesomeIcon icon={faStar} className={classes.star} />{raiting}</div> : <div></div>}
                                <span className={classes.item__year}>{date || createdAt}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
};

export default Item;