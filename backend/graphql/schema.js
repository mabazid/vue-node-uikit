const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Movie {
        _id: ID
        name: String
        description: String
        rating: Int
        imdbRating: Int
    }

    type Movies {
        moviesList: [Movie]!
    }

    input MovieInput {
        name: String!
        description: String!
        rating: Float!
        imdbRating: Float 
    }

    type RootQuery {
        getMovies: [Movie]
    }

    type RootMutation {
        createMovie(name: String,description: String!,rating: Float!,imdbRating: Float): Movie
    }

    schema {
        mutation: RootMutation
        query: RootQuery
    }
`);
