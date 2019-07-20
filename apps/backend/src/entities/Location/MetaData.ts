import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity, Column } from 'typeorm';
import Location from './';

@Entity()
export default class LocationMetaData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => Location)
    @JoinColumn()
    location: Location;
}
