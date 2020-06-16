"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { GraphQLScalarType } from 'graphql';
var Chapter_1 = require("./Chapter");
var Manga_1 = require("./Manga");
var Query = require("./query");
var resolvers = {
    // Date: new GraphQLScalarType({
    //     name: "Date",
    //     description: "Date",
    //     serialize(date) {
    //         return date.toISOString()
    //     }
    // }),
    Chapter: Chapter_1.default,
    MangaStatus: {
        COMPLETED: 2,
        ONGOING: 1,
        SUSPENDED: 0
    },
    Manga: Manga_1.default,
    Query: Query
};
exports.default = resolvers;
