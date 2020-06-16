"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manga_1 = require("../../../db/models/Manga");
//@ts-ignore TS6133
var mangaResolver = function (context, args) {
    return Manga_1.default.findById({ _id: args.id });
};
exports.default = mangaResolver;
