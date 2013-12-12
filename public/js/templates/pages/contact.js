// Compiled by Polvo, using Jade
define('templates/pages/contact', ['require', 'exports', 'module'], function(require, exports, module){
  module.exports = function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "/Users/scott/Sites/www/saus_chop/src/templates/pages/contact.jade" }];
try {
var buf = [];
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
buf.push("<div id=\"contact\" class=\"_passion\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 3, filename: jade.debug[0].filename });
buf.push("<div class=\"wrapper\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<a href=\"mailto:hello@sausandchop.com\" class=\"link\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push(" ");
jade.debug.shift();
buf.push("\n");
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("Hello @ <br> sausandchop <br> dot com");
jade.debug.shift();
jade.debug.shift();
buf.push("</a>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();
buf.push("</div>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno,"#contact._passion\n\n\t.wrapper\n\n\t\ta.link(href=\"mailto:hello@sausandchop.com\") \n\t\t\t| Hello @ <br> sausandchop <br> dot com");
}
}
});