import Manga from "#root/db/models/Manga";

const mangaResolver = (context, args) => {
    return Manga.findById({ _id: args.id });
}

export default mangaResolver;
