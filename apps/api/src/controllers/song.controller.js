/* eslint-disable camelcase */
/**
 * The Song controller contains all static methods that handle song requests
 */

import { Song, Artist, Album, Genre, Sequelize } from "../sequelize/models";
import { HTTP404Error } from "../utils/httpErrors";
// const { Op, literal } = Sequelize;

/**
 * @class Song
 */
class SongController {
  /**
   * get all songs
   * @static
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status and song data
   * @memberof SongController
   */
  static async getAllSongs(_req, res, next) {
    try {
      const songs = await Song.findAll();
      return res.status(200).send({ songs });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * create a new song
   *
   * @static
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status and song data
   * @memberof SongController
   */
  static async createSong(req, res, next) {
    try {
      const { name, artist_id, album_id, price, genre_id } = req.body;
      const artist = await Artist.findOne({ where: { artist_id } });
      if (album_id) {
        const album = await Album.findOne({ where: { album_id } });
        if (!album)
          throw new HTTP404Error(
            "The album id does not correspond to an album"
          );
      }
      if (!artist) {
        throw new HTTP404Error(
          "The artist id does not correspond to an artist"
        );
      }
      const song = await Song.create({
        name,
        artist_id,
        price,
        album_id,
        genre_id
      });
      return res.status(201).send({ song });
    } catch (err) {
      return next(err);
    }
  }
}

export default SongController;
