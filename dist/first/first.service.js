"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FirstService = void 0;
const common_1 = require("@nestjs/common");
let FirstService = class FirstService {
    constructor() {
        this.first = [
            { id: 0, name: 'peter Asalu', type: 'hard' },
            { id: 1, name: 'John Asalu', type: 'soft' },
        ];
    }
    getFirst(type) {
        if (type) {
            return this.first.filter((first) => first.type === type);
        }
        return this.first;
    }
    getOneFirst(id) {
        const first = this.first.find((first) => first.id === id);
        if (!first) {
            throw new Error('[FIRST NOT FOUND');
        }
        return first;
    }
    creatFirst(createFirstDto) {
        const newFirst = {
            ...createFirstDto,
            id: Date.now(),
        };
        this.first.push(newFirst);
        return this.first;
    }
    updateFirst(id, updateUserDto) {
        this.first = this.first.map((first) => {
            if (first.id === id) {
                return { ...first, ...updateUserDto };
            }
            return first;
        });
        return this.getOneFirst(id);
    }
    removeFirst(id) {
        const toBeRemoved = this.getOneFirst(id);
        this.first = this.first.filter((first) => first.id !== id);
        return toBeRemoved;
    }
};
exports.FirstService = FirstService;
exports.FirstService = FirstService = __decorate([
    (0, common_1.Injectable)()
], FirstService);
//# sourceMappingURL=first.service.js.map