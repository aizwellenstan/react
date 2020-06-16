"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
exports.axios = axios_1.default.create({
    baseURL: process.env.MANGA_EDEN_URL
});
var transformChapters = function (chapters) { return chapters.map(function (_a) {
    var number = _a[0], lastUpdated = _a[1], title = _a[2], id = _a[3];
    return ({
        id: id,
        lastUpdated: lastUpdated,
        number: number,
        title: title
    });
}); };
var IMAGES_CDN_BASE_URL = "https://cdn.mangaeden.com/mangasimg/";
var transformImages = function (images) {
    return images
        .map(function (_a) {
        var index = _a[0], url = _a[1], width = _a[2], height = _a[3];
        return ({
            height: height,
            index: index,
            url: IMAGES_CDN_BASE_URL + url,
            width: width
        });
    });
};
var transformMangas = function (mangas) {
    return mangas
        // .filter(manga => manga.id)
        .map(function (_a) {
        var alias = _a.a, categories = _a.c, hits = _a.h, _id = _a.i, image = _a.im, lastUpdated = _a.ld, status = _a.s, title = _a.t;
        return ({
            _id: _id,
            alias: alias,
            categories: categories,
            hits: hits,
            image: IMAGES_CDN_BASE_URL + image,
            lastUpdated: lastUpdated,
            status: status,
            title: title
        });
    });
};
exports.fetchAllMangas = function () {
    var langKey = 0;
    return exports.axios.get("list/" + langKey)
        .then(function (res) {
        res.data.manga = transformMangas(res.data.manga);
        return res;
    });
};
exports.fetchChapterImages = function (_a) {
    var chapterId = _a.chapterId;
    return exports.axios.get("chapter/" + chapterId + "/")
        .then(function (res) {
        res.data.images = transformImages(res.data.images);
        return res;
    });
};
exports.fetchMangaInfo = function (_a) {
    var mangaId = _a.mangaId;
    return exports.axios.get("manga/" + mangaId + "/")
        .then(function (res) {
        res.data.chapters = transformChapters(res.data.chapters);
        return res;
    });
};
