"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.schema = new Schema({
    alias: String,
    categories: [String],
    hits: Number,
    image: String,
    lastUpdated: Number,
    status: Number,
    title: String
});
var Manga = mongoose.model("Manga", exports.schema);
exports.default = Manga;
