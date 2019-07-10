import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    BaseEntity,
} from 'typeorm';
import Campaign from '../Campaign';
import CharacterMetaData from './MetaData';
import CHARACTER_TYPE from '../../enums/Character/TypeEnum';
import User from '../User';

@Entity()
export default class Character extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @Column()
    name: string;

    @Column({ type: 'enum', enum: CHARACTER_TYPE, default: CHARACTER_TYPE.NPC })
    type: CHARACTER_TYPE;

    @OneToOne(type => CharacterMetaData, { nullable: true })
    @JoinColumn()
    metadata?: CharacterMetaData;

    @ManyToOne(type => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(type => User, { nullable: false })
    user: User;
}
