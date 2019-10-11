'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const ENV = require('./config/environment')(EmberApp.env());

let theme = {};
theme[`themes/${ENV.theme}`] = `/assets/theme.css`;

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    outputPaths: {
      app: {
        css: theme
      }
    }
  });

  return app.toTree();
};
