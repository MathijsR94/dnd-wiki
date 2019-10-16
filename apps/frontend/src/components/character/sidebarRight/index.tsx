import React from 'react';
import Sidebar from '../../sidebar';
import CharacterImage from '../image';
import InformationTable from '../../shared/informationTable';

const rows = [
    {
        label: 'metadata.size',
        content: 'Gargantuan',
    },
    {
        label: 'metadata.alignment',
        content: 'Chaotic Evil (CE)',
    },
    {
        label: 'metadata.metOn',
        content: '14th Dilkar 3501',
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
