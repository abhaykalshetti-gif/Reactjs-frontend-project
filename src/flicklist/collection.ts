import type { Movie, Collection } from "./types";

export const movies: Movie[] = [
  {
    id: "m1",
    title: "Dune",
    year: 2021,
    posterUrl: "https://image.tmdb.org/t/p/w342/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    rating: 8.3,
    genres: ["Sci-Fi", "Action"],
    synopsis: "Paul Atreides leads nomadic tribes on a spiritual and physical journey on Arrakis."
  },
  {
    id: "m2",
    title: "Blade Runner 2049",
    year: 2017,
    posterUrl: "https://image.tmdb.org/t/p/w342/aMpyrCizvSgQrTWY4KcDfGGmn3N.jpg",
    rating: 8.1,
    genres: ["Sci-Fi", "Thriller"],
    synopsis: "A young blade runner uncovers a secret that leads him to Rick Deckard."
  },
  {
    id: "m3",
    title: "The Fellowship of the Ring",
    year: 2001,
    posterUrl: "https://image.tmdb.org/t/p/w342/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    rating: 8.8,
    genres: ["Fantasy", "Adventure"],
    synopsis: "A Hobbit and eight companions set out to destroy the One Ring."
  },
  {
    id: "m4",
    title: "Parasite",
    year: 2019,
    posterUrl: "https://image.tmdb.org/t/p/w342/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    rating: 8.6,
    genres: ["Thriller", "Drama"],
    synopsis: "Greed and class divide threaten a fragile symbiosis between two families."
  },
  {
    id: "m5",
    title: "Back to the Future",
    year: 1985,
    posterUrl: "https://image.tmdb.org/t/p/w342/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    rating: 8.5,
    genres: ["Comedy", "Sci-Fi", "Classic"],
    synopsis: "Teenager Marty McFly is accidentally sent 30 years into the past."
  },
  {
    id: "m6",
    title: "The Princess Bride",
    year: 1987,
    posterUrl: "https://image.tmdb.org/t/p/w342/5E8FhVbPZxA1JY9VcX7AqH8G4KJ.jpg",
    rating: 8.0,
    genres: ["Fantasy", "Romance", "Classic"],
    synopsis: "A fairy tale adventure about true love and high adventure."
  },
  {
    id: "m7",
    title: "Mad Max: Fury Road",
    year: 2015,
    posterUrl: "https://image.tmdb.org/t/p/w342/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    rating: 8.1,
    genres: ["Action", "Thriller"],
    synopsis: "In a desert wasteland, a drifter and a rebel warrior unite."
  },
  {
    id: "m8",
    title: "When Harry Met Sally...",
    year: 1989,
    posterUrl: "https://image.tmdb.org/t/p/w342/3wkbKeowUp1Zpkw1KkBqMWbt0P9.jpg",
    rating: 7.8,
    genres: ["Romance", "Comedy", "Classic"],
    synopsis: "Can men and women ever just be friends?"
  },
  {
    id: "m9",
    title: "The Dark Knight",
    year: 2008,
    posterUrl: "https://image.tmdb.org/t/p/w342/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9.0,
    genres: ["Action", "Thriller"],
    synopsis: "Batman faces the Joker, a criminal mastermind spreading chaos in Gotham."
  },
  {
    id: "m10",
    title: "Inception",
    year: 2010,
    posterUrl: "https://image.tmdb.org/t/p/w342/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    rating: 8.8,
    genres: ["Sci-Fi", "Thriller"],
    synopsis: "A thief who steals corporate secrets through dream-sharing is offered a final job."
  },
  {
    id: "m11",
    title: "Interstellar",
    year: 2014,
    posterUrl: "https://image.tmdb.org/t/p/w342/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 8.6,
    genres: ["Sci-Fi", "Drama"],
    synopsis: "A team of explorers travels through a wormhole to save humanity."
  },
  {
    id: "m12",
    title: "The Matrix",
    year: 1999,
    posterUrl: "https://image.tmdb.org/t/p/w342/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.7,
    genres: ["Sci-Fi", "Action"],
    synopsis: "A hacker discovers the true nature of reality and his role in the war against its controllers."
  },
  {
    id: "m13",
    title: "Gladiator",
    year: 2000,
    posterUrl: "https://image.tmdb.org/t/p/w342/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    rating: 8.5,
    genres: ["Action", "Drama"],
    synopsis: "A betrayed Roman general seeks revenge against the corrupt emperor."
  },
  {
    id: "m14",
    title: "E.T. the Extra-Terrestrial",
    year: 1982,
    posterUrl: "https://image.tmdb.org/t/p/w342/2Vg2YdYvL9gFGh2IGG5mNqq8uOa.jpg",
    rating: 7.9,
    genres: ["Sci-Fi", "Family", "Classic"],
    synopsis: "A troubled child summons the courage to help a friendly alien escape Earth."
  },
  {
    id: "m15",
    title: "The Godfather",
    year: 1972,
    posterUrl: "https://image.tmdb.org/t/p/w342/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: 9.2,
    genres: ["Drama", "Crime"],
    synopsis: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son."
  }
];

export const collections: Collection[] = [
  {
    id: "c1",
    name: "Top Sci-Fi",
    description: "Visionary worlds, AI dreams, and futures on the edge.",
    coverUrl: movies.find(m => m.id === "m10")!.posterUrl,
    tags: ["Sci-Fi"],
    movieIds: ["m1", "m2", "m10", "m11", "m12"]
  },
  {
    id: "c2",
    name: "80s & 90s Classics",
    description: "Nostalgic adventures and timeless charm from past decades.",
    coverUrl: movies.find(m => m.id === "m5")!.posterUrl,
    tags: ["Classic", "Comedy"],
    movieIds: ["m5", "m6", "m8", "m14"]
  },
  {
    id: "c3",
    name: "Fantasy & Epics",
    description: "Swords, sorcery, and sweeping journeys.",
    coverUrl: movies.find(m => m.id === "m3")!.posterUrl,
    tags: ["Fantasy", "Adventure"],
    movieIds: ["m3", "m6", "m13"]
  },
  {
    id: "c4",
    name: "Award Winners",
    description: "Critically acclaimed and widely celebrated.",
    coverUrl: movies.find(m => m.id === "m4")!.posterUrl,
    tags: ["Drama", "Thriller"],
    movieIds: ["m4", "m15", "m9"]
  },
  {
    id: "c5",
    name: "Action Legends",
    description: "Explosive battles, gripping duels, and relentless heroes.",
    coverUrl: movies.find(m => m.id === "m9")!.posterUrl,
    tags: ["Action"],
    movieIds: ["m7", "m9", "m13"]
  }
];
