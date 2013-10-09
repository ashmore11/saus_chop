// Compiled by Polvo, using Stylus
define('styles/pages/container', ['require', 'exports', 'module'], function(require, exports, module){

  var head = document.getElementsByTagName('head')[0];
  var style = module.exports = document.createElement('style');
  var content = '@font-face {  font-family: \"Passion\";  font-weight: normal;  font-style: normal;  src: url(\"../fonts/passionone-regular-webfont.eot\");  src: url(\"../fonts/passionone-regular-webfont.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/passionone-regular-webfont.woff\") format(\"woff\"), url(\"../fonts/passionone-regular-webfont.ttf\") format(\"truetype\");}._passion {  font-family: \"Passion\";}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td {  margin: 0;  padding: 0;  border: 0;  outline: 0;  font-weight: inherit;  font-style: inherit;  font-family: inherit;  font-size: 100%;  vertical-align: baseline;}body {  line-height: 1;  color: #000;  background: #fff;}ol,ul {  list-style: none;}table {  border-collapse: separate;  border-spacing: 0;  vertical-align: middle;}caption,th,td {  text-align: left;  font-weight: normal;  vertical-align: middle;}a img {  border: none;}body {  overflow: hidden;}body #nav {  position: absolute;  top: 0;  left: 0;  width: 100%;  height: 60px;  background: #fff;  z-index: 1;}body #nav .logo {  position: absolute;  top: 18px;  left: 30px;  height: 24px;}body #nav ul {  width: 100%;  text-align: center;}body #nav ul li {  font-size: 22px;  display: inline-block;  margin: 20px 40px;  cursor: pointer;  opacity: 0;  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";  filter: alpha(opacity=0);  -webkit-transition-duration: 0.5s;  -moz-transition-duration: 0.5s;  -o-transition-duration: 0.5s;  -ms-transition-duration: 0.5s;  transition-duration: 0.5s;}body #nav ul li.film:hover {  color: #bcbdc0 !important;}body #nav ul li.research:hover {  color: #b1d8aa !important;}body #nav ul li.contact:hover {  color: #b6e1e0 !important;}body #container {  position: relative;}body #container #film,body #container #research,body #container #contact {  position: absolute;  top: 0;  left: 0;  width: 100%;  height: 100%;}'

  style.setAttribute('id', 'styles/pages/container');
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