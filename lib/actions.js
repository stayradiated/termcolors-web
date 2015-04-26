'use strict';

var Constants = require('./constants');

module.exports = {
  changeSource: function (source) {
    this.dispatch(Constants.CHANGE_SOURCE, {value: source});
  },
  changeInputFormat: function (inputFormat) {
    this.dispatch(Constants.CHANGE_INPUT_FORMAT, {value: inputFormat});
  },
  changeOutputFormat: function (outputFormat) {
    this.dispatch(Constants.CHANGE_OUTPUT_FORMAT, {value: outputFormat});
  },
};
