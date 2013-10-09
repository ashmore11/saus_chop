// Compiled by Polvo, using Jade
define('templates/pages/notfound', ['require', 'exports', 'module'], function(require, exports, module){
  module.exports = function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/Users/scott/Sites/www/saus_chop/src/templates/pages/notfound.jade" }];
try {
var buf = [];
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<h1>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("Ops, page not found!");
jade.debug.shift();
jade.debug.shift();
buf.push("</h1>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno,"h1 Ops, page not found!");
}
}
});