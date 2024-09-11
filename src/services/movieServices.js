const Movie = require('../models/Movies');

let movies = [
    {
        _id: 1,
        title: 'Jungle Cuise',
        genre: 'Adventure',
        description: 'Dreaming about saving countless lives and having another adventure, the feisty English feminist and doctor of botany, Dr Lily Houghton, embarks on a peril-laden mission to change the world. Along with her fashionable brother, MacGregor, Dr Houghton enlists the help of the arrogant, wisecracking riverboat skipper, Captain Frank Wolff, to guide them through the serpentine Amazon River in La Quila, his swift wooden boat. Now, as the intrepid trio ventures deeper and deeper into the heart of an impenetrable green maze, searching for something that cannot be found, a centuries-old curse and the ruthless aristocrat, Prince Joachim, threaten to put an end to their ambitious plans.',
        director: 'Ivancho',
        year: '2023',
        rating: 3,
        imageUrl: '/img/jungle-cruise.jpeg',
    },
]

exports.getAll = () => {
    return Movie.find();
}

exports.addMovie = (movie) => {
    return Movie.create(movie);
}

exports.getOneMovie = (movieId) => {
    return Movie.findOne({ '_id': movieId });
}

exports.findMovies = (query) => {
    return Movie.find({ $or: [{ title: query.title }, { genre: query.genre }, { year: query.year }] });
}

exports.updateMovieCast = (castId, movieId) => {
    return Movie.updateOne({ '_id': movieId }, { $push: { 'castsId': castId } });
}
