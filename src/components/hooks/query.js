import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useQuery = (getData, currentPage, limitItem, genre = null, valueInput = false, category = null, year = null) => {

    const [itemList, setItemList] = useState(null);
    const [searchParams] = useSearchParams();

    const categoryItem = useCallback((getData) => {
        const searchQuerym = searchParams.get('search') || '';
        if (valueInput) {
            getData(currentPage, limitItem, genre, valueInput)
                .then((itemList) => (
                    setItemList({ ...itemList.data })
                ))
        } else {
            getData(currentPage, limitItem, genre, searchQuerym, category)
                .then((itemList) => (
                    setItemList({ ...itemList.data })
                ))
        }
    }, [category, currentPage, genre, limitItem, searchParams, valueInput])

    useMemo(() => {
        if (Array.isArray(getData)) {
            if (year.find(item => item.adress === category)) {
                categoryItem(getData[1])
            } else {
                categoryItem(getData[0])
            };
        } else {
            categoryItem(getData)
        };
    }, [currentPage, genre, searchParams, category, valueInput]);

    return itemList;
};
export default useQuery;