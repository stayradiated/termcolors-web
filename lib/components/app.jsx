'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Header = require('./header');

var App = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin('AppStore')],

  getStateFromFlux: function () {
    var flux = this.getFlux();
    return {
      app: flux.store('AppStore').getState(),
    };
  },

  render: function () {
    return (
      <div className='app'>
        <Header />
        <textarea className='source' ref='source'
          value={this.state.app.source} onChange={this.onChangeSource} />
        <div className='output'>
          {this.state.app.output}
        </div>
      </div>
    );
  },

  onChangeSource: function () {
    var value = this.refs.source.getDOMNode().value;
    this.getFlux().actions.changeSource(value);
  },

});

module.exports = App;
