import { Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity, JoinColumn } from 'typeorm';
import Location from '../Location';
import Character from '../Character';

@Entity()
export default class CampaignSetting extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => Location, location => location.id, { nullable: true })
    @JoinColumn()
    locations: [Location];

    @OneToMany(type => Character, character => character.id, { nullable: true })
    @JoinColumn()
    characters: [Character];
}
