import React, { FC } from 'react';
import { IData } from '../../types/IData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, EffectFade } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import classes from './swiperblock.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

interface ISwiperBlock {
    data?: IData
};

const SwiperBlock: FC<ISwiperBlock> = ({ data }) => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            effect={"fade"}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
            }}
            pagination={{
                dynamicBullets: true,
                clickable: true,
            }}
            modules={[Autoplay, Pagination, EffectFade]}
            className="mySwiper"
        >
            {data?.data.map((item, index) => {
                const attributes = item.attributes,
                    coverImage = attributes.coverImage.large,
                    titles = attributes.titles.en_jp,
                    usTitle = attributes.titles.en_us,
                    en = attributes.titles.en,
                    canonicalTitle = attributes.canonicalTitle,
                    id = item.id,
                    description = attributes.description;

                const title = usTitle || titles || en || canonicalTitle;
                return (
                    <SwiperSlide key={id} virtualIndex={index}>
                        <div className={classes.swiper_block}>
                            <img src={coverImage} className={classes.img} />
                            <div className={classes.swiper_container}>
                                <div className={classes.content}>
                                    <h2 className={classes.title}>{title}</h2>
                                    <span className={classes.description}>{description}</span>
                                    <Link to={`/id/anime/${id}`} className={classes.link}>Подробнее<FontAwesomeIcon icon={faArrowRight} className={classes.icon} /></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
};
export default SwiperBlock;