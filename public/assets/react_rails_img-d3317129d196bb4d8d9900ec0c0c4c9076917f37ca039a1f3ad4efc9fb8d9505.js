var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// usage: <Img className="tip" src="/assets/ui-tip.png" alt="private event tip" />
// using cssSprite: <Img src="/assets/css_sprite/where-b.png" /> =>
//   <img class="where-b" data-reactid=".0.1.$0.3.0.1.0">, where-b.png should be placed in `assets/images/css_sprite`
var Img = React.createClass({
  displayName: "Img",

  statics: {
    // usage: Img.assetPath('logo.png') => "/assets/logo.png"
    assetPath: function (path) {
      var paths = {};
      return paths[path] || "/assets/" + path;
    }
  },

  propTypes: {
    src: React.PropTypes.string
  },

  src: function () {
    var src = this.props.src;
    if (src.match("/assets/")) {
      src = src.replace("/assets/", '');
    }
    src = Img.assetPath(src);
    return src;
  },

  isUsingCssSprite: function (src) {
    return src.match(/css_sprite/);
  },

  useCssSprite: function (src, className) {
    // "/assets/ui-right-w.png" => "ui-right-w"
    var baseName = src.replace(/\/assets\/(.*)\..*$/, '$1');
    var cssSpriteClassName = baseName.replace(/css_sprite\//, '');
    if (className) {
      className = cssSpriteClassName + " " + className;
    } else {
      className = cssSpriteClassName;
    }
    src = Img.assetPath('css_sprite_holder.png');
    //src = null; // disable the src
    return { src: src, className: className };
  },

  render: function () {
    var className = this.props.className;
    var src = this.src();
    // using css_sprite
    if (this.isUsingCssSprite(src)) {
      // src should be url like "/assets/css_sprite/xxx.png"
      var result = this.useCssSprite(this.props.src, className);
      src = result.src;
      className = result.className;
    }
    var props = { src: src };
    if (className) {
      props.className = className;
    }
    return React.createElement("img", _extends({}, this.props, props));
  }
});

// similar to rails helper `image_tag`, e.g.: {imageTag('placeholder/active-01.png')}
// the function will return for development:
// /assets/placeholder/active-01.png
// and for production
// /assets/placeholder/active-01-be1f67ffd42a4c1a41bdcc547c5705a3423a2f24bfe930f00398077fe518e6c0.png
function imageTag(source, options) {
  if (!options) options = {};
  var src = "/assets/" + source;
  return React.createElement(Img, _extends({}, options, { src: src }));
};
