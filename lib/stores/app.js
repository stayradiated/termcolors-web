'use strict';

var Fluxxor = require('fluxxor');
var Constants = require('../constants');

var termcolors = require('termcolors');

var AppStore = Fluxxor.createStore({

  initialize: function (options) {
    this.source = options.source || '';
    this.inputFormat = options.inputFormat || 'xresources';
    this.outputFormat = options.outputFormat || 'xresources';

    this.bindActions(
      Constants.CHANGE_SOURCE, this.handleChangeSource,
      Constants.CHANGE_INPUT_FORMAT, this.handleChangeInputFormat,
      Constants.CHANGE_OUTPUT_FORMAT, this.handleChangeOutputFormat
    );
  },

  getState: function () {
    return {
      source: this.source,
      output: this.output,
      inputFormat: this.inputFormat,
      outputFormat: this.outputFormat,
    };
  },

  handleChangeSource: function (payload) {
    this.source = payload.value;
    this.convert();
  },

  handleChangeInputFormat: function (payload) {
    this.inputFormat = payload.value;
    this.convert();
  },

  handleChangeOutputFormat: function (payload) {
    this.outputFormat = payload.value;
    this.convert();
  },

  convert: function () {
    var colors = termcolors[this.inputFormat].import(this.source);
    termcolors.defaults.fill(colors);
    this.output = termcolors[this.outputFormat].export(colors);
    this.emit('change');
  },

});

module.exports = AppStore;
