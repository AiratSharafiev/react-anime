import React, { FC, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { limitItemDrop } from '../../../../constants/constants';
import { useGetSaerchRes } from '../../../../hooks/getItemSearchPanel/getItemSearchPanel';
import classes from './drop.module.scss';

interface IDrop {
    genr: string,
    valueInput: string
}

const Drop: FC<IDrop> = ({genr, valueInput}) => {
    const [value, setvalue] = useState('');
    const timer = useRef<any>(null);

    if (timer.current) {
        clearTimeout(timer.current)
    }

    timer.current = setTimeout(() => {
        setvalue(valueInput)
    }, 500);

    const searchDropAnime = useGetSaerchRes(limitItemDrop, genr, value);
    if(!searchDropAnime) {
        return(
            <></>
        )
    }
    if(!searchDropAnime.data.length) {
        return (
            <div className={classes.text}>Ничего не найдено</div>
        )
    };

    return (        
        <div className={classes.drop}>{searchDropAnime.data.map(item => {
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