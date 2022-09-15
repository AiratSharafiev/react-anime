import React, { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import NotFound from '../notFound/notFound';
import CategoryGenre from './categoryGenre/categoryGenre';
import Character from './character/character';
import Spinner from '../../components/ui/spinner/spinner';
import classes from './pageItem.module.scss';
import { dataApi } from '../../services/DataServices';
import { addMonth, getLink } from '../../helper/helper';

const PageItem = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const {data, isLoading, isError} = dataApi.useGetByIdQuery({ type, id })

    useEffect(() => {
        const searchQuerym = searchParams.get('search') || '';
        if(searchQuerym) {
            navigate(`/${type}`, {state: searchQuerym})
        }
    }, [navigate, searchParams, type])

    if (isError) {
        return <NotFound />
    }
    
    if (!data) {
        return (
            <></>
        )
    }    

    if (isLoading) {
        return <Spinner />
    };    

    const helper = data.data[0].attributes,
        relationships = data.data[0].relationships,
        img = helper.posterImage.small,
        titles = helper.titles.en_jp,
        usTitle = helper.titles.en_us,
        en = helper.titles.en,
        canonicalTitle = helper.canonicalTitle,
        years = helper.startDate,
        endDate = helper.endDate,
        episodeCount = helper.episodeCount,
        showType = helper.showType,
        episodeLength = helper.episodeLength,
        description = helper.description,
        ageRatingGuide = helper.ageRatingGuide,
        character = relationships.characters.links.related,
        category = relationships.categories.links.related;

    const title = usTitle || titles || en || canonicalTitle;

    const dateStart = addMonth(years),
        dateEnd = addMonth(endDate), 
        linkCategory = getLink(category),
        linkCharacter = getLink(character);

    const releaseDate = (episodeCount: number, dateStart: string, dateEnd: string): any => {
        if ((!episodeCount || episodeCount > 1) && !dateEnd) {
            return (
                <div><span className= { classes.text } > Выпуск: </span>с {dateStart}</div >
                )
        } else if (episodeCount > 1 || dateEnd !== dateStart) {
        return (
            <div><span className= { classes.text } > Выпуск: </span>с {dateStart} по {dateEnd}</div >
            )
        } else if (episodeCount === 1) {
            return (
                <div><span className= { classes.text } > Выпуск: </span>{dateStart}</div >
                )
        } else {
            return undefined
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
            <div className={classes.category}><CategoryGenre linkItem={linkCategory} /></div>
            <h4 className={classes.title}>Главные герои:</h4>
            <div className={classes.character}><Character linkItem={linkCharacter} /></div>
        </div>
    )
};
export default PageItem;