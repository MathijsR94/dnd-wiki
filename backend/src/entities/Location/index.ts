import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    BaseEntity,
    OneToOne,
    JoinColumn,
} from 'typeorm';
import LocationMetaData from './MetaData';
import CampaignSetting from '../CampaignSetting';
import LOCATION_TYPE from '../../enums/Location/TypeEnum';

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

    @OneToOne(type => LocationMetaData, { onDelete: 'CASCADE' })
    @JoinColumn()
    metadata: LocationMetaData;

    @OneToOne(type => CampaignSetting)
    @JoinColumn()
    setting: CampaignSetting;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}
