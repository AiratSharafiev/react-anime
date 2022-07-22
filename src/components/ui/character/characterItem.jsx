import React, { useMemo, useState } from 'react';
import classes from './character.module.scss';

const CharacterItem = ({getAni, url}) => {
    const [charactersItem, setCharactersItem] = useState('');

    useMemo(() => {
        getAni.getlink(url)
            .then((res) => {
                setCharactersItem({...res})
        });
    }, [url]);

    if (!charactersItem) {
        return <></>
    }
    
    const data = charactersItem.data.data,
        name = data.attributes.canonicalName,
        img = data.attributes.image.original,
        id = data.id;
        
    return (
        <div className={classes.content}>
            <img className={classes.img} src={img} alt='img'/>
            <div className={classes.title}>{name}</div>
        </div>
    )
};
export default CharacterItem;