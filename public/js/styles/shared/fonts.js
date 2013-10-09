// Compiled by Polvo, using Stylus
define('styles/shared/fonts', ['require', 'exports', 'module'], function(require, exports, module){

  var head = document.getElementsByTagName('head')[0];
  var style = module.exports = document.createElement('style');
  var content = '@font-face {  font-family: \"Passion\";  font-weight: normal;  font-style: normal;  src: url(\"../fonts/passionone-regular-webfont.eot\");  src: url(\"../fonts/passionone-regular-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/passionone-regular-webfont.woff\") format(\"woff\"), url(\"../fonts/passionone-regular-webfont.ttf\") format(\"truetype\");}._passion {  font-family: \"Passion\";}'

  style.setAttribute('id', 'styles/shared/fonts');
  style.setAttribute('type', 'text/css');

  // MODERN BROWSERS?
  try
  { 
    style.appendChild(document.createTextNode(content));

  // IE8? (weird things happens without this on IEs)
  } catch( e )
  {
    style.styleSheet.cssText = content; // IE8
  }

  head.insertBefore(style, head.lastChild);
  return style;
});