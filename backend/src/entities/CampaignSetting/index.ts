import { Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity, JoinColumn } from 'typeorm';
import Location from '../Location';
import Character from '../Character';
import Campaign from '../Campaign';
import campaign from '../../graphql/resolvers/Mutation/campaign';

@Entity()
export default class CampaignSetting extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(type => Location, location => location.id, { nullable: true })
    @JoinColumn()
    locations?: [Location];

    @OneToMany(type => Character, character => character.id, { nullable: true })
    @JoinColumn()
    characters?: [Character];

    @OneToMany(type => Campaign, campaign => campaign.id, { nullable: true })
    @JoinColumn()
    campaigns?: [Campaign];
}
