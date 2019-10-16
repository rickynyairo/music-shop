import ArtistController from "./controllers/artist.controller";

export const routes = [
  {
    method: "get",
    path: "/api/artists",
    controller: ArtistController.getAllArtists
  },
  {
    method: "post",
    path: "/api/artists",
    controller: ArtistController.createArtist
  }
];
