const addMovie = async (movie) => {
  const addMovieQuery = {
    query: `
        mutation {
            createMovie(
                name: "${movie.name}",
                description: "${movie.description}",
                rating: ${movie.rating},
                imdbRating: 3,
            ) {
                _id
            }
        }
    `,
  };

//   const name = movie.name;
//   const description = movie.name;
//   const rating = movie.name;
//   const imdbRating = movie.name;
//   const query = `mutation CreateMovie($input: MovieInput) {
//     createMovie(input: $input) {
//       id
//     }
//   }`;

  const response = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(addMovieQuery),
  });
  return await response.json();
};

const getMovies = async () => {
  const getMoviesQuery = {
    query: `
    {
        getMovies {
            _id
            name
            description

        }
    }
    `,
  };

  const response = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getMoviesQuery),
  });
  return await response.json();
};

export { getMovies, addMovie };
