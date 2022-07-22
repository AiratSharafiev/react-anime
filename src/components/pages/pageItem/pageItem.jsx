import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import NotFound from '../notFound/notFound';
import CategoryGenre from '../../ui/categoryGenre/categoryGenre';
import Character from '../../ui/character/character';
import Spinner from '../../ui/spinner/spinner';
import classes from './pageItem.module.scss';

const PageItem = ({ getAni }) => {
    const getById = getAni.getById;
    const { type, id } = useParams();

    if (!Number.isInteger(+id)) {
        return <NotFound />
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [res, setRes] = useState(null);

    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    const addMonth = (date) => {
        if (!date) {
            return ''
        }
        const arr = date.split('-');
        const monthsNum = --arr[1]
        return `${arr[2]} ${months[monthsNum]} ${arr[0]}г.`
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(() => {
        getById(type, id)
            .then((res) => {
                setRes({ ...res })
            });
    }, [id]);

    if (!res) {
        return <Spinner />
    };

    const data = res.data.data[0].attributes,
        relationships = res.data.data[0].relationships,
        img = data.posterImage.small,
        titles = data.titles.en_jp,
        usTitle = data.titles.en_us,
        en = data.titles.en,
        canonicalTitle = data.canonicalTitle,
        years = data.startDate,
        endDate = data.endDate,
        episodeCount = data.episodeCount,
        showType = data.showType,
        episodeLength = data.episodeLength,
        description = data.description,
        ageRatingGuide = data.ageRatingGuide,
        character = relationships.characters.links.related,
        category = relationships.categories.links.related;

    const title = usTitle || titles || en || canonicalTitle;

    const dateStart = addMonth(years);
    const dateEnd = addMonth(endDate);

    const releaseDate = (episodeCount, dateStart, dateEnd) => {
        if (!episodeCount || episodeCount > 1 && !dateEnd) {
            return (
                <div><span className={classes.text}>Выпуск: </span>с {dateStart}</div>)

        } else if (episodeCount > 1 || dateEnd !== dateStart) {
            return (
                <div><span className={classes.text}>Выпуск: </span>с {dateStart} по {dateEnd}</div>
            )
        } else if (episodeCount === 1) {
            return (
                <div><span className={classes.text}>Выпуск: </span>{dateStart}</div>
            )
        }
    };

    return (
        <div className={classes.content}>
            <h2 className={classes.titleMain}>{title}</h2>
            <div className={classes.conteiner}>
                <div>
                    <img src={img} alt='img' className={classes.img} />
                </div>
                <div className={classes.item__main}>
                    <div className={classes.block}>
                        {releaseDate(episodeCount, dateStart, dateEnd)}
                        {episodeCount ? <div className={classes.property}><span className={classes.text}>Эпизоды: </span>{episodeCount}</div> : ''}
                        <div className={classes.property}><span className={classes.text}>Тип: </span>{showType}</div>
                        {episodeLength ? <div className={classes.property}><span className={classes.text}>Длительность эпизода: </span>{episodeLength} мин.</div> : ''}
                        {ageRatingGuide ? <div className={classes.property}><span className={classes.text}>Возрастное ограничение: </span>{ageRatingGuide}</div> : ''}
                    </div>
                </div>
            </div>
            <h4 className={classes.title}>Описание:</h4>
            <div className={classes.description}>{description}</div>
            <h4 className={classes.title}>Жанры:</h4>
            <div className={classes.category}><CategoryGenre getAni={getAni} link={category} /></div>
            <h4 className={classes.title}>Главные герои:</h4>
            <div className={classes.character}><Character getAni={getAni} character={character} /></div>
        </div>
    )
};
export default PageItem;