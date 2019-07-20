var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Location_1, _a;
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BaseEntity, OneToOne, JoinColumn, } from 'typeorm';
import LocationMetaData from './MetaData';
import CampaignSetting from '../CampaignSetting';
import LOCATION_TYPE from '../../enums/Location/TypeEnum';
let Location = Location_1 = class Location extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Location.prototype, "id", void 0);
__decorate([
    Column({ type: 'enum', enum: LOCATION_TYPE, default: LOCATION_TYPE.City, nullable: true }),
    __metadata("design:type", String)
], Location.prototype, "type", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], Location.prototype, "name", void 0);
__decorate([
    OneToMany(type => Location_1, location => location.id, { nullable: true }),
    __metadata("design:type", Array)
], Location.prototype, "locations", void 0);
__decorate([
    OneToOne(type => LocationMetaData, { onDelete: 'CASCADE' }),
    JoinColumn(),
    __metadata("design:type", LocationMetaData)
], Location.prototype, "metadata", void 0);
__decorate([
    OneToOne(type => CampaignSetting),
    JoinColumn(),
    __metadata("design:type", typeof (_a = typeof CampaignSetting !== "undefined" && CampaignSetting) === "function" ? _a : Object)
], Location.prototype, "setting", void 0);
__decorate([
    CreateDateColumn(),
    __metadata("design:type", String)
], Location.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn(),
    __metadata("design:type", String)
], Location.prototype, "updatedAt", void 0);
Location = Location_1 = __decorate([
    Entity()
], Location);
export default Location;
//# sourceMappingURL=index.js.map