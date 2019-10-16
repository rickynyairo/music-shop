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
  static async getAllArtists(req, res, next) {
    try {
      console.log("here>>>>>");
      const artists = await Artist.findAll();
      return res.status(200).send({ artists });
    } catch (error) {
      return next(error);
    }
  }
}

export default ArtistController;
