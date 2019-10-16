/* eslint-disable camelcase */
/**
 * The Artist controller contains all static methods that handles artist requests
 */

import { Artist, Sequelize } from "../sequelize/models";
// const { Op, literal } = Sequelize;

/**
 * @class Artist
 */
class ArtistController {
  /**
   * get all artists
   * @static
   * @async
   * @param {object} req express request object
   * @param {object} res express response object
   * @param {object} next next middleware
   * @returns {json} json object with status and artist data
   * @memberof artistController
   */
  static async getAllArtists(_req, res, next) {
    try {
      const artists = await Artist.findAll();
      return res.status(200).send({ artists });
    } catch (error) {
      return next(error);
    }
  }
  static async createArtist(req, res, next) {
    try {
      const { name, email } = req.body;
      const [artist, created] = await Artist.findOrCreate({
        where: { email },
        defaults: { name, email }
      });
      if (!created) {
        // the email provided exists in the db
        return res
          .status(400)
          .json({ error: { message: "The email provided already exists" } });
      }
      return res.status(200).send({ artist });
    } catch (err) {
      return next(err);
    }
  }
}

export default ArtistController;
