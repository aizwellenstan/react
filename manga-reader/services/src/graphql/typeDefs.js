import { gql } from "apollo-server";

const typeDefs = gql`
    scalar Date

    type Chapter {
        id: ID!
        lastUpdated: Date!
        number: Int!
        title: String
    }

    type Manga {
        id: ID!
        info: MangaInfo!
        image: String
        lastUpdated: Date!
        title: String!
    }

    type MangaInfo {
        chapters: [Chapter!]!
        id: ID!
    }
    
    type Query {
        manga(id: ID!): Manga!
        mangas: [Manga!]!
    }
`;

export default typeDefs;
