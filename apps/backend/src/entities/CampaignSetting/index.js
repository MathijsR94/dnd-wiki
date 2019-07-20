var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity, JoinColumn } from 'typeorm';
import Location from '../Location';
import Character from '../Character';
import Campaign from '../Campaign';
let CampaignSetting = class CampaignSetting extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], CampaignSetting.prototype, "id", void 0);
__decorate([
    OneToMany(type => Location, location => location.id, { nullable: true }),
    JoinColumn(),
    __metadata("design:type", Array)
], CampaignSetting.prototype, "locations", void 0);
__decorate([
    OneToMany(type => Character, character => character.id, { nullable: true }),
    JoinColumn(),
    __metadata("design:type", Array)
], CampaignSetting.prototype, "characters", void 0);
__decorate([
    OneToMany(type => Campaign, campaign => campaign.id, { nullable: true }),
    JoinColumn(),
    __metadata("design:type", Array)
], CampaignSetting.prototype, "campaigns", void 0);
CampaignSetting = __decorate([
    Entity()
], CampaignSetting);
export default CampaignSetting;
//# sourceMappingURL=index.js.map