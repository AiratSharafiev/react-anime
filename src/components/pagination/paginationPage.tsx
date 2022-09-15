import React, { FC, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from './paginationPage.module.scss';
import { currentPageSlice } from "../../store/reducers/currentPage.slice";
import { useAppDispatch } from "../../app/hooks";
import { limitItem, maxPage } from "../../constants/constants";

interface IPages {
    page: number,
    allCount: number,
    maxNumberPage: number
}

const Pages: FC<IPages> = ({ page, allCount, maxNumberPage }) => {

    const { pathname } = useLocation();
    const maxCount = limitItem * (maxPage - 1);
    const [count, setCount] = useState<number[]>([]);
    const { setPage } = currentPageSlice.actions;
    const dispatch = useAppDispatch();

    const pageArr = useCallback(() => {
        const arr: number[] = [];

        const createCount = (n: number, m: number): void => {
            while (n <= m) {
                arr.push(n++);
            }
        };

        if (allCount > maxCount) {
            createCount(page, (page + maxPage - 1));
        } else {
            createCount(1, maxNumberPage);
        };

        setCount([...arr]);
    }, [allCount, maxCount, maxNumberPage, page])

    const increasePage = useCallback(() => {
        let arr = count.map(item => ++item);
        setCount([...arr])
    }, [count])

    useEffect(() => {
        pageArr()
    }, [allCount]);

    useEffect(() => {
        if (count[0] > page) {
            pageArr()
        } else if (count[maxPage - 1] < page) {
            increasePage()
        }
    }, [count, increasePage, page, pageArr, pathname]);

    const activePage = (e: React.MouseEvent): void => {
        const target = e.currentTarget.id;
        dispatch(setPage(+target - 1))
    };

    if (!count) {
        return (
            <span className={classes.pagination_item}></span>
        )
    };

    return (
        <>
            {count.map(item => {
                if (item === page) {
                    return (
                        <span
                            key={item}
                            id={`${item}`}
                            className={classes.pagination_item_active}>
                            {item}
                        </span>
                    )
                }
                return (
                    <span
                        key={item}
                        id={`${item}`}
                        className={classes.pagination_item}
                        onClick={activePage}>
                        {item}
                    </span>
                )
            })}
        </>
    )
};

export default Pages;