'use strict';

var React = require('react');
var _ = require('lodash');

var Dropdown = React.createClass({
  
  propTypes: {
    values: React.PropTypes.objectOf(React.PropTypes.string).isRequired,
    default: React.PropTypes.string,
    onChange: React.PropTypes.func,
  },

  render: function () {
    return (
      <select onChange={this.props.onChange} defaultValue={this.props.default}>
        {
          _.map(this.props.values, function (value, key) {
            return (
              <option key={key} value={key}>{value}</option>
            )
          })
        }
      </select>
    );
  },

});

module.exports = Dropdown;
