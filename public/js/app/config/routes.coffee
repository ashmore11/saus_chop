###
  Compiled by Polvo, using CoffeeScript
###

define ['require', 'exports', 'module'], (require, exports, module)->
  module.exports = class Routes
  
    # all routes
    @routes =
  
      # main route
      '/':
        to: "pages/container"
        at: null
        el: "body"
  
      '/films':
        to: "pages/film"
        at: "/"
        el: "#container"
  
      '/research':
        to: "pages/research"
        at: "/"
        el: "#container"
  
      '/contact':
        to: "pages/contact"
        at: "/"
        el: "#container"
  
      '/404':
        to: "pages/notfound"
        at: "/pages"
        el: "#container"
  
    # default route
    @root = '/films'
  
    # not found route
    @notfound = '/404'