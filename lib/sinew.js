/**
 * @author: Thomas Rampelberg <thomas@saunter.org>
 *
 * Copyright(c) 2011 Thomas Rampelberg
 */

(function() {
  
  var sinew = this.sinew = {};
  if (typeof module !== 'undefined' && module.exports)
    module.exports = sinew;

  sinew.View = Backbone.View.extend({
    _template: function(opts) {
      if (!(this.template in sinew._templates))
        sinew._templates[this.template] = Handlebars.compile(
          $("#" + this.template).html());
      return sinew._templates[this.template](opts, this.helpers);
    },
    render: function() {
      var _this = this;
      this.trigger('render:pre');
      var opts = this.model ? this.model.toJSON() : {};
      _.extend(opts, this.options || {});
      _.defer(function() { _this.trigger('render:post') });
      return this;
    }
  });

})();
