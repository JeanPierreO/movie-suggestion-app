export class Constant {
  readonly apiKey = "988bd12d972562dde5eb4c43d71c56e0";
  readonly hostUrl = "https://api.themoviedb.org";
  readonly imagesUrl = "https://image.tmdb.org/t/p/w185";
  readonly lang = "language=en-US";
  readonly posterPath = this.imagesUrl;

  readonly mock_data = {
    username: "jp",
    password: "123",
    movies: [{
      id: 550,
      title: "Fight Club",
      genres: {
        id: 18,
        name: "Drama"
      },
      adult: false,
      runtime: 139,
      vote_average: 7.8,
      backdrop_path: "/fCayJrkfRaCRCTh8GqN30f8oyQF.jpg",
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'
    }]
  };



}
