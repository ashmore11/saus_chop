// Compiled by Polvo, using Stylus
define('styles/pages/notfound', ['require', 'exports', 'module'], function(require, exports, module){

  var head = document.getElementsByTagName('head')[0];
  var style = module.exports = document.createElement('style');
  var content = ''

  style.setAttribute('id', 'styles/pages/notfound');
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