import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from './paginationPage.module.scss';
import { limitItem } from '../../data/data';
import { maxPage } from '../../data/data';

const Pages = ({ page, openPage, allCount, maxNumberPage }) => {

    const { pathname } = useLocation();
    const maxCount = limitItem * (maxPage - 1);
    const [count, setCount] = useState([]);

    const pageArr = useCallback(() => {
        const arr = [];

        const createCount = (n, m) => {
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

    const activePage = (e) => {
        const target = e.currentTarget.id;
        openPage(+target)
    };

    if (!count) {
        return (
            <span className={classes.pagination_item}></span>
        )
    };

    return count.map(item => {
        if (item === page) {
            return (
                <span
                    key={item}
                    id={item}
                    className={classes.pagination_item_active}>
                    {item}
                </span>
            )
        }
        return (
            <span
                key={item}
                id={item}
                className={classes.pagination_item}
                onClick={activePage}>
                {item}
            </span>
        )
    })
};

export default Pages;