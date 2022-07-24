import React, { useMemo, useState } from 'react';
import CharacterItem from './characterItem';

const Character = ({getAni, character}) => {
    const [characters, setCharacters] = useState('');    

    const mainCharacters = [];
    useMemo(() => {
        getAni.getlink(character)
            .then((res) => {
                setCharacters({...res})
        });
    }, [character, getAni]);

    if(characters) {
        const data = characters.data.data
            .filter(item => item.attributes.role === "main");
        data.forEach(item => {
            mainCharacters.push(item.relationships.character.links.related)
        })
    };

    if(!mainCharacters.length){
        return (
            <></>
        )
    };

    return (
        mainCharacters.map((item, index) => {
            return (
                <CharacterItem url={item} getAni={getAni} key={index}/>
            )
        })        
    );
};
export default Character;