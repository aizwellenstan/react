import * as mongoose from "mongoose";
import { DB_URL } from '../../config';

mongoose.connect(process.env.MONGODB_URI || DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
    console.log("conneted to database");
});