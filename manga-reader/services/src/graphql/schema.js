import { makeExcutableSchema } from "graphql-tools";

import resolvers from "./resolvers";
import typeDefs from "./resolvers/typeDefs";

const schema = makeExcutableSchema({
    resolvers,
    typeDefs
});

export default schema;
