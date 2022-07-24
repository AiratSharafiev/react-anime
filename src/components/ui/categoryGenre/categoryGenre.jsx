import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './categoryGenre.module.scss';

const CategoryGenre = ({getAni, link}) => {
    const [categories, setCategories] = useState(null);

    const {type} = useParams();


    useMemo(() => {        
        getAni.getlink(link)
            .then((res) => {
                setCategories({...res})
        });
    }, [getAni, link]);

    if(!categories) {
        return (
            <></>
        )
    }
    
    const data = categories.data.data;

    return (
        data.map((item) => {
            const category = item.attributes.title,
                id = item.id;
            return (
                <Link key={id} to={`/${type}/${category}`} className={classes.text}><span>{category}</span></Link>
            )
        })
    )
};
export default CategoryGenre;