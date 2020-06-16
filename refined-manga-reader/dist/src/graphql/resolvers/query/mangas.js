"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manga_1 = require("../../../db/models/Manga");
//@ts-ignore TS6133
var mangaResolver = function (context, args) {
    if (args.searchTitle) {
        return Manga_1.default.find({
            title: new RegExp(args.searchTitle, "i")
        }).sort({ hits: -1 });
    }
    else {
        // console.log(Object.keys(Manga.find({})));
        return Manga_1.default.find({}).sort({ lastUpdated: -1 });
    }
};
exports.default = mangaResolver;
