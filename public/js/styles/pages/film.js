// Compiled by Polvo, using Stylus
define('styles/pages/film', ['require', 'exports', 'module'], function(require, exports, module){

  var head = document.getElementsByTagName('head')[0];
  var style = module.exports = document.createElement('style');
  var content = '#film {  background: #e7e7e8;}#film .wrapper {  position: absolute;  top: 13%;  left: 22%;}#film .wrapper h1.title {  text-transform: uppercase;  color: #bcbdc0;  font-size: 98px;  line-height: 85px;}#film .wrapper ul.content {  margin-top: 100px;}#film .wrapper ul.content li.box {  width: 400px;  height: 250px;  margin-right: 20px;  display: inline-block;  background: #bcbdc0;}'

  style.setAttribute('id', 'styles/pages/film');
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