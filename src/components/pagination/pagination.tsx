import React, { FC } from "react";
import Pages from "./paginationPage";
import classes from './paginationPage.module.scss';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { currentPageSlice } from "../../store/reducers/currentPage.slice";
import { limitItem } from "../../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface IPagination {
    allCount: number
};

const Pagination: FC<IPagination> = ({ allCount }) => {

    const maxNumberPage = Math.ceil(allCount / limitItem);
    const { page } = useAppSelector(state => state.currentPageReducer);
    const { incrementPage, decrementPage } = currentPageSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <div className={classes.pagination}>
            {page ? <button onClick={() => dispatch(decrementPage())}><FontAwesomeIcon icon={faAngleLeft} className={classes.icon} /></button> : ''}
            <Pages page={page + 1} allCount={allCount} maxNumberPage={maxNumberPage} />
            {page + 1 !== maxNumberPage ? <button onClick={() => dispatch(incrementPage())}><FontAwesomeIcon icon={faAngleRight} className={classes.icon} /></button> : ''}
        </div>
    )
};

export default Pagination;