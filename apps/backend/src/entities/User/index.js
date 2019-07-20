var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany, JoinColumn, } from 'typeorm';
import USER_ROLE from '../../enums/User/UserRoleEnum';
import Campaign from '../Campaign';
import Character from '../Character';
let User = class User extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Column({ type: 'enum', enum: USER_ROLE, default: USER_ROLE.Player }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", String)
], User.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", String)
], User.prototype, "updatedAt", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "resetToken", void 0);
__decorate([
    Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "resetTokenExpiry", void 0);
__decorate([
    OneToMany(type => Campaign, campaign => campaign.id, { nullable: true }),
    JoinColumn(),
    __metadata("design:type", Array)
], User.prototype, "campaigns", void 0);
__decorate([
    OneToMany(type => Character, character => character.id, { nullable: true }),
    JoinColumn(),
    __metadata("design:type", Array)
], User.prototype, "characters", void 0);
User = __decorate([
    Entity(),
    Unique(['email'])
], User);
export default User;
//# sourceMappingURL=index.js.map