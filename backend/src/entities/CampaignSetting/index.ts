import { Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity, JoinColumn } from 'typeorm';
import Location from '../Location';
import Character from '../Character';

@Entity()
export default class CampaignSetting extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => Location, location => location.id)
    @JoinColumn()
    locations: [Location];

    @OneToMany(type => Character, character => character.id)
    @JoinColumn()
    characters: [Character];
}
