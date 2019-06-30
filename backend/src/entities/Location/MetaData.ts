import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from 'typeorm';

@Entity()
export default class LocationMetaData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => Location, { onDelete: 'CASCADE' })
    @JoinColumn()
    location: Location;
}
