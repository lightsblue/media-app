define([
  'jquery',
  'backbone'
  //'text!app/view/hello.html'
], function ($, Backbone, html) {
  'use strict';

  var Ctor = Backbone.View.extend({
    render: function () {
      var html = '',
        rows = 5,
        columns = 4,
        n,
        r,
        color;
      html += "<div style='height: 100%'>";
      for (n = 0; n < rows; n++) {
        html +=  "<div style='height: " + (100 / rows) + "%;'>";
        for (r = 0; r < columns; r++) {
          if (n % 2 === 0) {
            color = r % 2 === 0 ? '#eee' : 'green';
          } else {
            color = r % 2 === 0 ? '#fff' : 'yellow';
          }
          html +=  "<div style='float: left; height: 100%; width: " + (100 / columns) + "%; background-color: " + color + "'></div>";
        }
        html +=  "</div>";
      }
      html += '</div>';
      $(this.el).html(html);
      return this;
    }
  });

  return Ctor;
});
