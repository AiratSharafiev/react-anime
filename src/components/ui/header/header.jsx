import React from 'react';
import classes from './header.module.scss';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons";

const Header = ({changeGenre, iconMenu, classNameMenu}) => {

    const genre = (e) => {
        changeGenre(e.target.id);
    };
    
    const setActive = ({isActive}) => ({borderBottom: isActive ? '2px solid #fff' : 'none'});

    return (
        <>
            <header className={classes.header}>
                <div className='__container'>
                    <div className={classes.content}>
                        <NavLink to='/' className={classes.menu__link}><FontAwesomeIcon icon={faHouseChimney} className={classes.home}/></NavLink>
                        <div className={classes.menu}>
                            <NavLink
                                to='/anime' 
                                className={classes.menu__link}
                                onClick={genre}
                                style={setActive}
                                id='anime'>Аниме</NavLink>
                            <NavLink 
                                to='/manga' 
                                className={classes.menu__link}
                                onClick={genre}
                                style={setActive}
                                id='manga'>Манга</NavLink>    
								<button type="button" className={classNameMenu} onClick={iconMenu}>
									<span></span>
									<span></span>
									<span></span>
								</button>                                
                        </div> 
                    </div>                    
                </div>            
            </header>
        </>
        
    )
};
export default Header;