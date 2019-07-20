import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import CHARACTER_STATUS from '../../enums/Character/StatusEnum';
import RACE from '../../enums/Race/RaceEnum';
import CLASS from '../../enums/Class/ClassEnum';
import ALIGNMENT from '../../enums/Alignment/AlignmentEnum';
import Character from './';

@Entity()
export default class CharacterMetaData extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(type => Character)
    @JoinColumn()
    character: Character;

    @Column({ type: 'enum', default: CHARACTER_STATUS.Alive, enum: CHARACTER_STATUS, nullable: true })
    status: CHARACTER_STATUS;

    @Column({ type: 'enum', default: RACE.Unknown, enum: RACE, nullable: true })
    race: RACE;

    @Column({ type: 'enum', default: CLASS.Unknown, enum: CLASS, nullable: true })
    class: CLASS;

    @Column({ type: 'enum', default: ALIGNMENT.UN, enum: ALIGNMENT })
    alignment: ALIGNMENT;
}
