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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const typeorm_1 = require("typeorm");
const book_entity_1 = require("./book.entity");
let Author = class Author extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Author.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", String)
], Author.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", String)
], Author.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", String)
], Author.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", String)
], Author.prototype, "dateOfDeath", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", String)
], Author.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", String)
], Author.prototype, "bio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", String)
], Author.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 32,
        nullable: true,
    }),
    __metadata("design:type", Number)
], Author.prototype, "bookId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => book_entity_1.Book, (book) => book.authors),
    (0, typeorm_1.JoinTable)({
        name: 'author_book',
        joinColumn: {
            name: 'author_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'book_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Author.prototype, "books", void 0);
Author = __decorate([
    (0, typeorm_1.Entity)({ name: 'authors' })
], Author);
exports.Author = Author;
//# sourceMappingURL=author.entity.js.map