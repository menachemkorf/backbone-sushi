var router = new (Backbone.Router.extend({
  routes: {
    'index.html': 'index',
    'menu': 'allProducts',
    'menu/:id': 'productDetails',
    'checkout': 'checkout'
  },
  index: function() {
    App.init();
    this.navigate('/menu', { trigger: true});
  },
  allProducts: function(a) {
    App.showProducts();
  },
  productDetails: function(id) {
    App.showProductDetails(+id);
  },
  checkout: function() {
    App.checkout();
  }
}))()

Backbone.history.start({
  pushState: true
});