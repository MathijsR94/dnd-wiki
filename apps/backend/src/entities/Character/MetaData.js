var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BaseEntity } from 'typeorm';
import CHARACTER_STATUS from '../../enums/Character/StatusEnum';
import RACE from '../../enums/Race/RaceEnum';
import CLASS from '../../enums/Class/ClassEnum';
import ALIGNMENT from '../../enums/Alignment/AlignmentEnum';
import Character from './';
let CharacterMetaData = class CharacterMetaData extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], CharacterMetaData.prototype, "id", void 0);
__decorate([
    OneToOne(type => Character),
    JoinColumn(),
    __metadata("design:type", typeof (_a = typeof Character !== "undefined" && Character) === "function" ? _a : Object)
], CharacterMetaData.prototype, "character", void 0);
__decorate([
    Column({ type: 'enum', default: CHARACTER_STATUS.Alive, enum: CHARACTER_STATUS, nullable: true }),
    __metadata("design:type", String)
], CharacterMetaData.prototype, "status", void 0);
__decorate([
    Column({ type: 'enum', default: RACE.Unknown, enum: RACE, nullable: true }),
    __metadata("design:type", Number)
], CharacterMetaData.prototype, "race", void 0);
__decorate([
    Column({ type: 'enum', default: CLASS.Unknown, enum: CLASS, nullable: true }),
    __metadata("design:type", Number)
], CharacterMetaData.prototype, "class", void 0);
__decorate([
    Column({ type: 'enum', default: ALIGNMENT.UN, enum: ALIGNMENT }),
    __metadata("design:type", String)
], CharacterMetaData.prototype, "alignment", void 0);
CharacterMetaData = __decorate([
    Entity()
], CharacterMetaData);
export default CharacterMetaData;
//# sourceMappingURL=MetaData.js.map