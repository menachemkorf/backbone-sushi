var CartView = Backbone.View.extend({
  id: 'cart',
  template: JST.cart,
  events: {
    'click .empty_cart': 'emptyCart',
    'click .checkout': 'checkout'
  },
  render: function() {
    this.$el.html(this.template({
      items: this.collection.toJSON(),
      total: this.collection.getTotal()
    }));
    $('main').prepend(this.$el);
    this.delegateEvents();
  },
  updateView: function() {
    if (this.collection.length) {
      this.render();
    } else {
      this.$el.remove();
    }
  },
  emptyCart: function(e) {
    e.preventDefault();

    this.collection.reset();
  },
  checkout: function(e) {
    e.preventDefault();
    router.navigate('/checkout', { trigger: true });
  },
  initialize: function() {
    this.stopListening(this.collection, 'cartUpdated reset');
    this.listenTo(this.collection, 'cartUpdated reset', this.updateView);
  }
});