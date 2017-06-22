var App = {
  $el: $('#content'),
  init: function() {
    _.extend(this, Backbone.Events);
    this.createCart();
  },
  createCart: function() {
    if (this.cart) {
      this.cart.view.remove();
      this.cart.countView.remove();
    }

    this.cart = new Cart();

    this.cart.view = new CartView({
      collection: this.cart
    });

    this.cart.countView = new CartCountView({
      collection: this.cart
    });
    this.on('addToCart', this.cart.addItem.bind(this.cart))
  },
  showProducts: function() {
    if (this.resetCart) {
      this.createCart();
      this.resetCart = false;
    }
    this.productsView = new ProductsView({
      collection: this.products
    });
  },
  showProductDetails: function(id) {
    this.productDetailsView = new ProductDetailsView({
      model: this.products.get(+id)
    });
  },
  checkout: function() {
    this.cart.view.remove();
    this.cart.view = new CheckoutView({
      collection: this.cart
    });
  },
};

Handlebars.registerHelper('format_price', function(price) {
  return (+price).toFixed(2);
});
