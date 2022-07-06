const UserList = [
  {
    id: 1,
    name: "john",
    username: "john",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
      },
      {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "UNITEDSTATES",
      },
    ],
  },
  {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 25,
    nationality: "UNITEDSTATES",
  },
  {
    id: 4,
    name: "Rafe",
    username: "rafe123",
    age: 60,
    nationality: "GERMANY",
  },
  {
    id: 5,
    name: "Kelly",
    username: "kelly2019",
    age: 35,
    nationality: "CHILE",
    friends: [
 {
    id: 2,
    name: "Pedro",
    username: "PedroTech",
    age: 20,
    nationality: "BRAZIL",
  },
  {
    id: 3,
    name: "Sarah",
    username: "cameron",
    age: 25,
    nationality: "UNITEDSTATES",
  },
    ]

  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 4,
    name: "PedroTech The Movie",
    yearOfPublication: 2022,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList }