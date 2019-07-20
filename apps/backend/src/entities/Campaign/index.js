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
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity, JoinColumn, ManyToOne, } from 'typeorm';
import Character from '../Character';
import User from '../User';
let Campaign = class Campaign extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Campaign.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Campaign.prototype, "name", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", String)
], Campaign.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", String)
], Campaign.prototype, "updatedAt", void 0);
__decorate([
    OneToMany(type => Character, player => player.id, { nullable: true }),
    __metadata("design:type", Array)
], Campaign.prototype, "players", void 0);
__decorate([
    ManyToOne(type => User, user => user.id),
    JoinColumn(),
    __metadata("design:type", typeof (_a = typeof User !== "undefined" && User) === "function" ? _a : Object)
], Campaign.prototype, "dm", void 0);
Campaign = __decorate([
    Entity()
], Campaign);
export default Campaign;
//# sourceMappingURL=index.js.map