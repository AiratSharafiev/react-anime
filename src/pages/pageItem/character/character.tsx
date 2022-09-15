import React, { FC } from 'react';
import { dataApi } from '../../../services/DataServices';
import CharacterItem from './characterItem';

interface ICharacter {
    linkItem: string
}

const Character: FC<ICharacter> = ({ linkItem }) => {
    const mainCharacters: string[] = [];
    const { data } = dataApi.useGetLinkQuery( linkItem )

    if (data) {
        const characters = data.data
            .filter(item => item.attributes.role === "main");
        characters.forEach(item => {
            mainCharacters.push(item.relationships.character.links.related)
        })
    };

    if (!data) {
        return (
            <></>
        )
    };

    return (
        <>
            {mainCharacters.map((item, index) => {
                return (
                    <CharacterItem link={item} key={index} />
                )
            })}
        </>
    );
};
export default Character;