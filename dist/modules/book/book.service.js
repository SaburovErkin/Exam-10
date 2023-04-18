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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("../../entities/book.entity");
const typeorm_2 = require("typeorm");
let BookService = class BookService {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }
    findAll() {
        return this.bookRepo.find();
    }
    create(data) {
        const book = this.bookRepo.create(data);
        this.bookRepo.save(book);
        return book;
    }
    findOne(id) {
        return this.bookRepo.findOne({ where: { id } });
    }
    update(id, body) {
        return this.bookRepo.update({ id }, body);
    }
    delete(id) {
        return this.bookRepo.delete({ id });
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map