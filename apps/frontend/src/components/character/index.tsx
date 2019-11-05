import React from 'react';
import Main from '../main';
import CharacterSidebarLeft from './sidebarLeft';
import CharacterSidebarRight from './sidebarRight';
import slugify from '../../libs/slugify';

export default () => (
    <Main
        sidebarLeft={<CharacterSidebarLeft />}
        sidebarRight={<CharacterSidebarRight />}
    >
        <h1>Byman, Eater Of Sheep</h1>

        <p>
            The odor of sulfur and pumice surrounds a red dragon, whose
            swept-back horns and spinal frill define its silhouette. Its beaked
            snout vents smoke at all times, and its eyes dance with flame when
            it is angry.
        </p>

        <h2 id={slugify('A Red Dragon’s Lair')}>A Red Dragon’s Lair</h2>

        <p>
            Red dragons lair in high mountains or hills, dwelling in caverns
            under snow-capped peaks, or within the deep halls of abandoned mines
            and dwarven strongholds. Caves with volcanic or geothermal activity
            are the most highly prized red dragon lairs, creating hazards that
            hinder intruders and letting searing heat and volcanic gases wash
            over a dragon as it sleeps.
        </p>
        <p>
            With its hoard well protected deep within the lair, a red dragon
            spends as much of its time outside the mountain as in it. For a red
            dragon, the great heights of the world are the throne from which it
            can look out to survey all it controls—and the wider world it seeks
            to control.
        </p>
        <p>
            Throughout the lair complex, servants erect monuments to the
            dragon’s power, telling the grim story of its life, the enemies it
            has slain, and the nations it has conquered.
        </p>

        <h3 id={slugify('Regional Effects')}>Regional Effects</h3>

        <p>
            The region containing a legendary red dragon’s lair is warped by the
            dragon’s magic, which creates one or more of the following effects:
        </p>

        <ul>
            <li>
                Small earthquakes are common within 6 miles of the dragon’s
                lair.
            </li>
            <li>
                Water sources within 1 mile of the lair are supernaturally warm
                and tainted by sulfur.
            </li>
            <li>
                Rocky fissures within 1 mile of the dragon’s lair form portals
                to the Elemental Plane of Fire, allowing creatures of elemental
                fire into the world to dwell nearby.
            </li>
        </ul>
    </Main>
);
