import React, { useEffect, useState, FC } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import classes from './searchPanel.module.scss';
import DropList from './dropList/dropList';
import classNames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SearchPanel: FC = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [activeDrop, setActiveDrop] = useState<boolean>(false);
    const [visibleInput, setVisibleInput] = useState<boolean>(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const { pathname } = useLocation();

    useEffect(() => {
        const searchQuerym = searchParams.get('search') || '';
        setValueInput(searchQuerym);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const target = e.currentTarget;
        // eslint-disable-next-line no-lone-blocks
        { //@ts-ignore
            if (target[0].value) {
                const query = target.search.value;
                if (pathname.length > 1) {
                    setSearchParams({ search: query });
                    setActiveDrop(false);
                };
            }
        }
    };

    const openSearchInput = (): void => {
        setVisibleInput(true)
    };

    const goBack = ():void => {
        setVisibleInput(false)
    }

    useEffect(() => {
        setValueInput('');
    }, [pathname]);

    useEffect(() => {
        valueInput ? setActiveDrop(true) : setActiveDrop(false);
    }, [valueInput]);

    return (
        <>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classNames(classes.input_container, visibleInput && classes.visible)}>
                    <FontAwesomeIcon icon={faAngleLeft} className={classes.back} onClick={goBack}/>
                    <input
                        value={valueInput}
                        onChange={e => setValueInput(e.target.value)}
                        type="search"
                        name='search'
                        autoComplete='off'
                        className={classes.search}
                        placeholder='Поиск...' />
                </div>
                <button type='submit' className={classes.input_button}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
                <button><FontAwesomeIcon icon={faMagnifyingGlass}  className={classes.button} onClick={openSearchInput}/></button>
                {activeDrop ? <DropList valueInput={valueInput} /> : ''}
            </form>
        </>
    )
}

export default SearchPanel;