import React, { FC } from 'react';
import { getLink } from '../../../helper/helper';
import { dataApi } from '../../../services/DataServices';
import classes from './character.module.scss';

interface ICharacterItem {
    link: string
}

const CharacterItem: FC<ICharacterItem> = ({link}) => {
    const linkItem = getLink(link)

    const {data} = dataApi.useGetLinkItemQuery( linkItem );
    if (!data) {
        return <></>
    }
    
    const charactersItem = data.data,
        name = charactersItem.attributes.canonicalName,
        img = charactersItem.attributes.image.original;
        
    return (
        <div className={classes.content}>
            <img className={classes.img} src={img} alt='img'/>
            <div className={classes.title}>{name}</div>
        </div>
    )
};
export default CharacterItem;