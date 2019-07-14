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
    ManyToOne,
} from 'typeorm';
import Character from '../Character';
import User from '../User';

@Entity()
export default class Campaign extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @OneToMany(type => Character, player => player.id, { nullable: true })
    players?: Character[];

    @ManyToOne(type => User, user => user.id)
    @JoinColumn()
    dm: User;
}
