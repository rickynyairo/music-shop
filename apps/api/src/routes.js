import ArtistController from "./controllers/artist.controller";
import AlbumController from "./controllers/album.controller";
import SongController from "./controllers/song.controller";
import GenreController from "./controllers/genre.controller";
import ShoppingCartController from "./controllers/shoppingcart.controller";

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
  },
  {
    method: "post",
    path: "/api/albums",
    controller: AlbumController.createAlbum
  },
  {
    method: "get",
    path: "/api/albums",
    controller: AlbumController.getAllAlbums
  },
  {
    method: "post",
    path: "/api/songs",
    controller: SongController.createSong
  },
  {
    method: "get",
    path: "/api/songs",
    controller: SongController.getAllSongs
  },
  {
    method: "post",
    path: "/api/genres",
    controller: GenreController.createGenre
  },
  {
    method: "get",
    path: "/api/genres",
    controller: GenreController.getAllGenres
  },
  {
    method: "get",
    path: "/api/shoppingcart/id",
    controller: ShoppingCartController.generateUniqueCartId
  },
  {
    method: "post",
    path: "/api/shoppingcart/add",
    controller: ShoppingCartController.addItemToCart
  },
  {
    method: "delete",
    path: "/api/shoppingcart/empty/:cart_id",
    controller: ShoppingCartController.emptyCart
  },
  {
    method: "delete",
    path: "/api/shoppingcart/remove/:item_id",
    controller: ShoppingCartController.removeItemFromCart
  },
  {
    method: "get",
    path: "/api/shoppingcart/:cart_id",
    controller: ShoppingCartController.getCart
  }
];
