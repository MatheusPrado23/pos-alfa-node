'use strict';

const Model = require('./model');

const Controller = {
  create: function(data, callback) {
    Model.create(data, callback);
  },
  find: function(query, callback) {
    Model.find(query, callback);
  },
  findOne: function(query, callback) {
    Model.findOne(query, callback);
  },
  remove: function(query, cb) {
    Model.remove(query, cb)
  },
  update: function(query, mod, callback) {
    Model.update(query, mod,callback)
  },
};

module.exports = Controller;
