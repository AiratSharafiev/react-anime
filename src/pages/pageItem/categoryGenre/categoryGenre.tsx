import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dataApi } from '../../../services/DataServices';
import classes from './categoryGenre.module.scss';

interface ICategoryGen {
    linkItem: string
}

const CategoryGenre: FC<ICategoryGen> = ({ linkItem }) => {
    const { type } = useParams();
    const { data } = dataApi.useGetLinkQuery( linkItem );

    if (!data) {
        return (
            <></>
        )
    }

    return (
        <>
            {data.data.map((item) => {
                const category = item.attributes.title,
                    id = item.id;
                return (
                    <Link key={id} to={`/${type}/${category}`} className={classes.text}><span>{category}</span></Link>
                )
            })}
        </>
    )
};
export default CategoryGenre;