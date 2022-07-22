import React from "react";
import Pages from "./paginationPage";
import { limitItem } from '../../data/data';
import classes from './paginationPage.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ allCount, setPage, currentPage }) => {

    const maxNumberPage = Math.ceil(allCount / limitItem);

    const openPage = (page) => {
        setPage(--page);
    };

    const decrement = () => {
        setPage(--currentPage);
    };

    const increment = () => {
        setPage(++currentPage);
    };

    return (
        <div className={classes.pagination}>
            {currentPage ? <span className={classes.pagination_item} onClick={decrement}><FontAwesomeIcon icon={faAngleLeft} className={classes.icon} /></span> : ''}
            <Pages page={currentPage + 1} openPage={openPage} allCount={allCount} maxNumberPage={maxNumberPage} />
            {currentPage + 1 !== maxNumberPage ? <span className={classes.pagination_item} onClick={increment}><FontAwesomeIcon icon={faAngleRight} className={classes.icon} /></span> : ''}
        </div>
    )
};

export default Pagination;