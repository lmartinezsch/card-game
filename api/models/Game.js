/**
 * Game.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    player: {
      collection: "player",
      via: "game"
    },
    status: {
      collection: "status",
      via: "game"
    }
  }
};
