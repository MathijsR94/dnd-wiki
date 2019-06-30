import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    BaseEntity,
} from 'typeorm';
import Location from '../Location';
import Character from '../Character';

@Entity()
export default class CampaignSetting extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => Location, location => location.id)
    locations: [Location];

    @OneToMany(type => Character, character => character.id)
    characters: [Character];
}
