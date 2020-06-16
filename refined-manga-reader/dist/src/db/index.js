"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var config_1 = require("../../config");
mongoose.connect(process.env.MONGODB_URI || config_1.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.once("open", function () {
    console.log("conneted to database");
});
