var App = {
  $el: $('#content'),
  init: function() {
    _.extend(this, Backbone.Events);
    this.createCart();
  },
  createCart: function() {
    this.cart = new Cart();

    if (this.cart.view) {
      this.cart.view.remove();
    }

    this.cart.view = new CartView({
      collection: this.cart
    });

    this.cart.countView = new CartCountView({
      collection: this.cart
    });
    this.off('addToCart');
    this.on('addToCart', this.cart.addItem.bind(this.cart))
  },
  showProducts: function() {
    if (this.reset) {
      this.createCart();
      this.reset = false;
    }
    this.productsView = new ProductsView({ collection: this.products });
  },
  showProductDetails: function(id) {
    this.productDetailsView = new ProductDetailsView({ model: this.products.get(+id) });
  },
  checkout: function() {
    if (this.cart.view) {
      this.cart.view.remove();
    }
    this.cart.view = new CheckoutView({ collection: this.cart });
  },
};

Handlebars.registerHelper('format_price', function(price) {
  return (+price).toFixed(2);
});
