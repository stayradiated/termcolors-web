'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var Dropdown = require('./dropdown');

var Header = React.createClass({

  mixins: [FluxMixin],

  render: function () {
    return (
      <header>
        <Dropdown
          values={{
            iterm: 'iTerm2',
            termite: 'Termite',
            terminalapp: 'Terminal.app',
            xresources: 'Xresources',
          }}
          onChange={this.onChangeInputFormat}
          default='xresources'
        />

        <h1>termcolors</h1>

        <Dropdown
          values={{
            chromeshell: 'Chrome Secure Shell',
            gnome: 'Gnome Terminal',
            guake: 'Guake',
            iterm: 'iTerm2 (Nightly)',
            konsole: 'Konsole',
            linux: 'Linux console',
            mintty: 'MinTTY',
            putty: 'Putty',
            st: 'Simple Terminal',
            terminalapp: 'Terminal.app',
            terminator: 'Terminator',
            termite: 'Termite',
            xfce: 'XFCE4 Terminal',
            xresources: 'Xresources',
            // textmate: 'Sublime Text (experimental)',
            json: 'JSON Scheme',
          }}
          onChange={this.onChangeOutputFormat}
          default='xresources'
        />
      </header>
    );
  },

  onChangeInputFormat: function (e) {
    var value = e.target.value;
    this.getFlux().actions.changeInputFormat(value);
  },

  onChangeOutputFormat: function (e) {
    var value = e.target.value;
    this.getFlux().actions.changeOutputFormat(value);
  },


});

module.exports = Header;
