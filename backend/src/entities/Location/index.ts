import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    BaseEntity,
} from 'typeorm';
import LocationMetaData from './MetaData';
import CampaignSetting from '../CampaignSetting';

@Entity()
export default class Location extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'enum', enum: LOCATION_TYPE, default: LOCATION_TYPE.City, nullable: true })
    type: LOCATION_TYPE;

    @Column()
    name: string;

    @OneToMany(type => Location, location => location.id, { nullable: true })
    locations: [Location];

    @Column({ nullable: true })
    metadata: LocationMetaData;

    @Column()
    setting: CampaignSetting;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
