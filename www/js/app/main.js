define(function (require) {
  'use strict';
  // Load any app-specific modules
  // with a relative require call,
  // like:
  // var util = require('./util');
  var GridView = require('app/view/grid-view'),
    //GridView = require('app/view/vbox-view'),
    hello;

  console.log('before render');
  hello = new GridView();
  hello.el = $('#content');
  hello.render();
  console.log('after render');
});
