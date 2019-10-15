import React from 'react';
import Sidebar from '../../sidebar';
import CharacterImage from '../image';
import InformationTable from '../../shared/informationTable';

const rows = [
    {
        label: 'Test',
        content: 'Bliep',
    },
];
export default () => (
    <Sidebar side="right">
        <CharacterImage
            imageSrc="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/147/1000/1000/636252758629652181.jpeg"
            characterName="Byman, Eater Of Sheep"
        />
        <InformationTable rows={rows} />
    </Sidebar>
);
