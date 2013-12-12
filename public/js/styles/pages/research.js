// Compiled by Polvo, using Stylus
define('styles/pages/research', ['require', 'exports', 'module'], function(require, exports, module){

  var head = document.getElementsByTagName('head')[0];
  var style = module.exports = document.createElement('style');
  var content = '#research {  background: #deedcf;}#research .wrapper {  position: absolute;  top: 32%;  left: 22%;}#research .wrapper h1.title {  text-transform: uppercase;  color: #b1d8aa;  font-size: 98px;  line-height: 85px;  margin-bottom: 50px;}#research .wrapper .link {  text-transform: uppercase;  color: #b1d8aa;  font-size: 58px;  line-height: 85px;}#research .wrapper .link a {  color: #b1d8aa;  text-decoration: none;  position: relative;}#research .wrapper .link .underline {  position: absolute;  top: 93.5%;  left: 36.3%;  width: 245px;  height: 6px;  background: #b1d8aa;}body.mobile #research .wrapper {  position: absolute;  top: 220px;  left: 80px;}body.mobile #research .wrapper h1.title br {  display: none;}body.mobile #research .wrapper .link .underline {  position: absolute;  top: 372px;  left: 347px;}body.tablet #research .wrapper {  position: absolute;  top: 90px;  left: 80px;  width: 100%;}body.tablet #research .wrapper h1.title {  font-size: 80px;  line-height: 70px;}body.tablet #research .wrapper .link .underline {  position: absolute;  top: 238px;  left: 347px;}'

  style.setAttribute('id', 'styles/pages/research');
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