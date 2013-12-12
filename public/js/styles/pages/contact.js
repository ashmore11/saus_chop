// Compiled by Polvo, using Stylus
define('styles/pages/contact', ['require', 'exports', 'module'], function(require, exports, module){

  var head = document.getElementsByTagName('head')[0];
  var style = module.exports = document.createElement('style');
  var content = '#contact {  background: #d9eeee;}#contact .wrapper {  position: absolute;  top: 32%;  left: 22%;}#contact .wrapper a.link {  text-transform: uppercase;  color: #b6e1e0;  font-size: 98px;  line-height: 85px;  text-decoration: none;}body.mobile #contact .wrapper {  position: absolute;  top: 220px;  left: 80px;}body.tablet #contact .wrapper {  position: absolute;  top: 90px;  left: 80px;  width: 100%;}body.tablet #contact .wrapper a.link {  font-size: 80px;  line-height: 70px;}'

  style.setAttribute('id', 'styles/pages/contact');
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