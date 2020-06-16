"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var router = express.Router();
var staticDir = path.resolve(__dirname, '../../static');
// Service worker
router.use('/sw.js', function (_, res) {
    res.sendFile(path.resolve(staticDir, 'sw.js'));
});
router.use('/*', function (_, res) {
    res.sendFile(path.resolve(staticDir, 'index.html'));
});
exports.routes = router;
