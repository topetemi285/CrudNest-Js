"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstController = void 0;
const common_1 = require("@nestjs/common");
const create_first_dto_1 = require("./dto/create-first.dto");
const first_service_1 = require("./first.service");
const update_first_dto_1 = require("./dto/update-first.dto");
const belt_guard_1 = require("../belt/belt.guard");
let FirstController = class FirstController {
    constructor(firstService) {
        this.firstService = firstService;
    }
    getFirst(type) {
        return this.firstService.getFirst(type);
    }
    GetOneFirst(id) {
        try {
            return this.firstService.getOneFirst(id);
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
    createFirst(createFirstDto) {
        return this.firstService.creatFirst(createFirstDto);
    }
    editFirst(id, updateUser) {
        return this.firstService.updateFirst(+id, updateUser);
    }
    removeFirst(id) {
        return this.firstService.removeFirst(+id);
    }
};
exports.FirstController = FirstController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FirstController.prototype, "getFirst", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FirstController.prototype, "GetOneFirst", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(belt_guard_1.BeltGuard),
    __param(0, (0, common_1.Body)(new common_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_first_dto_1.CreateFirstDto]),
    __metadata("design:returntype", void 0)
], FirstController.prototype, "createFirst", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_first_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], FirstController.prototype, "editFirst", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FirstController.prototype, "removeFirst", null);
exports.FirstController = FirstController = __decorate([
    (0, common_1.Controller)('first'),
    __metadata("design:paramtypes", [first_service_1.FirstService])
], FirstController);
//# sourceMappingURL=first.controller.js.map