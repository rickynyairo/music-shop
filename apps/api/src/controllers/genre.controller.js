/**
 * The Genre controller contains all static methods that handle genre requests
 */

import { Genre, Sequelize } from "../sequelize/models";
import { HTTP404Error } from "../utils/httpErrors";
// const { Op, literal } = Sequelize;

/**
 * @class Genre
 */
class GenreController {
  /**
   * get all genres
   * @static
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status and genre data
   * @memberof GenreController
   */
  static async getAllGenres(_req, res, next) {
    try {
      const genres = await Genre.findAll();
      return res.status(200).send({ genres });
    } catch (error) {
      return next(error);
    }
  }
  /**
   * create a new genre
   *
   * @static
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status and genre data
   * @memberof AlbumController
   */
  static async createGenre(req, res, next) {
    try {
      const { title } = req.body;
      const genre = await Genre.create({ title });
      return res.status(201).send({ genre });
    } catch (err) {
      return next(err);
    }
  }
}

export default GenreController;
