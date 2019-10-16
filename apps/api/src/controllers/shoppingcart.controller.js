import uuidv1 from "uuid/v1";
import { ShoppingCart, Sequelize } from "../sequelize/models";
import { HTTP404Error } from "../utils/httpErrors";

/**
 * The Shopping cart controller contains all static methods that handle album requests
 *
 *
 * @class shoppingCartController
 */
class ShoppingCartController {
  /**
   * generate random unique id for cart identifier
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with cart_id
   * @memberof ShoppingCartController
   */
  static generateUniqueCartId(req, res) {
    // implement method to generate unique cart Id
    const cart_id = uuidv1().substring(0, 32);
    return res.status(200).json({ cart_id });
  }

  /**
   * adds item to a cart with cart_id
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with cart
   * @memberof ShoppingCartController
   */
  static async addItemToCart(req, res, next) {
    // implement function to add item
    try {
      const { album_id, cart_id } = req.body;
      //save item to cart
      await ShoppingCart.create({ album_id, cart_id });
      // return entire shopping cart
      const cartItems = await ShoppingCart.findAll({ where: { cart_id } });
      return res.status(201).json(cartItems);
    } catch (error) {
      return next();
    }
  }

  /**
   * get shopping cart using the cart_id
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with cart
   * @memberof ShoppingCartController
   */
  static async getCart(req, res, next) {
    try {
      const { cart_id } = req.params;
      const cartItems = await ShoppingCart.findAll({ where: { cart_id } });
      return res.status(200).json(cartItems);
    } catch (error) {
      return next(error);
    }
  }

  /**
   * removes all items in a cart
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with cart
   * @memberof ShoppingCartController
   */
  static async emptyCart(req, res, next) {
    try {
      const { cart_id } = req.params;
      const deleted = await ShoppingCart.destroy({ where: { cart_id } });
      return deleted
        ? res
            .status(200)
            .json({ message: "Shopping cart emptied successfully" })
        : res.status(404).json({
            error: {
              message: "The cart_id does not correspond to a shopping cart"
            }
          });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * remove single item from cart
   * cart id is obtained from current session
   *
   * @static
   * @param {obj} req express request object
   * @param {obj} res express response object
   * @returns {json} returns json response with message
   * @memberof ShoppingCartController
   */
  static async removeItemFromCart(req, res, next) {
    try {
      const { item_id } = req.params;
      const deleted = await ShoppingCart.destroy({ where: { item_id } });
      return deleted
        ? res
            .status(200)
            .json({ message: "Album successfully removed from cart" })
        : res.status(404).json({
            error: {
              message: "The item_id does not correspond to an item in the cart"
            }
          });
    } catch (error) {
      return next(error);
    }
  }
}

export default ShoppingCartController;
