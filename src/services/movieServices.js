let movies = [
    {
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
    return movies;
}