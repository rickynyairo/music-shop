/**
 * The Album controller contains all static methods that handle album requests
 */

import { Album, Artist, Sequelize } from "../sequelize/models";
import { HTTP404Error } from "../utils/httpErrors";
// const { Op, literal } = Sequelize;

/**
 * @class Album
 */
class AlbumController {
  /**
   * get all albums
   * @static
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status and album data
   * @memberof AlbumController
   */
  static async getAllAlbums(_req, res, next) {
    try {
      const albums = await Album.findAll();
      return res.status(200).send({ albums });
    } catch (error) {
      return next(error);
    }
  }
  /**
   * create a new album
   *
   * @static
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status and song data
   * @memberof AlbumController
   */
  static async createAlbum(req, res, next) {
    try {
      const { title, artist_id, price } = req.body;
      const artist = await Artist.findOne({ where: { artist_id } });
      if (!artist) {
        throw new HTTP404Error(
          "The artist id does not correspond to an artist"
        );
      }
      const album = await Album.create({ title, artist_id, price });
      return res.status(201).send({ album });
    } catch (err) {
      return next(err);
    }
  }
}

export default AlbumController;
