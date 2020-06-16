"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var request = require("request");
var config_1 = require("../config");
var router = express.Router();
// Bind /api/* to original API server
router.use('/api', function (req, res) {
    var boundPath = config_1.RESOURCE_PROTOCOL + "://" + config_1.RESOURCE_HOST + req.path;
    req.pipe(request(boundPath)).pipe(res);
});
router.use('/mangasimg', function (req, res) {
    var boundPath = "" + "https://cdn.mangaeden.com/mangasimg" + req.path;
    req.pipe(request(boundPath)).pipe(res);
});
exports.dataSources = router;
