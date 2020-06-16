import Manga from "#root/db/models/Manga";

const mangaResolver = () => {
    // console.log(Object.keys(Manga.find({})));
    return Manga.find({}).sort({ lastUpdated: -1 });
}

export default mangaResolver;
