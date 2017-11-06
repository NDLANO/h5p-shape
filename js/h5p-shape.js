var H5P = H5P || {};

/**
 * Shape module
 *
 * @param {jQuery} $
 */
H5P.Shape = (function ($) {
  /**
   * Initialize module.
   *
   * @param {Object} params Behavior settings
   * @param {Number} id Content identification
   * @returns {C} self
   */
  function C(params, id) {
    var self = this;
    H5P.EventDispatcher.call(this);
    self.params = params;
    self.contentId = id;
  }

  C.prototype = Object.create(H5P.EventDispatcher.prototype);
  C.prototype.constructor = C;

  /**
   * Attach h5p inside the given container.
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    this.$inner = $container.addClass('h5p-shape');
    this.$shape = $('<div class="h5p-shape-element h5p-shape-' + this.params.type + '"></div>');
    this.styleShape();
    this.$shape.appendTo(this.$inner);
  };

  /**
   * Style the shape
   */
  C.prototype.styleShape = function () {
    var css = {};
    var emSize = 0.0835;

    if (this.params.type == "vertical-line" || this.params.type == "horizontal-line") {
      css['background-color'] = this.params.lineColor;
    } else {
      css['background-color'] = this.params.fillColor;
      css['border-style'] = this.params.lineStyle;
      css['border-color'] = this.params.lineColor;
      css['border-width'] = (this.params.lineWeight * emSize) + 'em';
    }

    if (this.params.type == "rounded-rectangle") {
      css['border-radius'] = this.params.lineRadius * 0.25 + 'em';
    }

    this.$shape.css(css);
  };

  return C;
})(H5P.jQuery);