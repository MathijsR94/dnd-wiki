var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, BaseEntity, } from 'typeorm';
import Campaign from '../Campaign';
import CharacterMetaData from './MetaData';
import CHARACTER_TYPE from '../../enums/Character/TypeEnum';
import User from '../User';
let Character = class Character extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Character.prototype, "id", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", String)
], Character.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", String)
], Character.prototype, "updatedAt", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Character.prototype, "name", void 0);
__decorate([
    Column({ type: 'enum', enum: CHARACTER_TYPE, default: CHARACTER_TYPE.NPC }),
    __metadata("design:type", String)
], Character.prototype, "type", void 0);
__decorate([
    OneToOne(type => CharacterMetaData, { nullable: true }),
    JoinColumn(),
    __metadata("design:type", CharacterMetaData)
], Character.prototype, "metadata", void 0);
__decorate([
    ManyToOne(type => Campaign, { nullable: true }),
    __metadata("design:type", typeof (_a = typeof Campaign !== "undefined" && Campaign) === "function" ? _a : Object)
], Character.prototype, "campaign", void 0);
__decorate([
    ManyToOne(type => User, { nullable: false }),
    __metadata("design:type", typeof (_b = typeof User !== "undefined" && User) === "function" ? _b : Object)
], Character.prototype, "user", void 0);
Character = __decorate([
    Entity()
], Character);
export default Character;
//# sourceMappingURL=index.js.map