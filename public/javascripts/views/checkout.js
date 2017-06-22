var CheckoutView = Backbone.View.extend({
  id: 'checkout',
  template: JST.checkout,
  events: {
    'click footer a': 'cancelOrder',
    'submit form': 'submitOrder'
  },
  cancelOrder: function(e) {
    e.preventDefault();

    App.resetCart = true;
    router.navigate('/menu', { trigger: true });
  },
  submitOrder: function(e) {
    e.preventDefault();

    App.resetCart = true;
    router.navigate('/menu', { trigger: true });
  },
  render: function() {
    App.$el.html(this.$el);
    this.renderItems();
  },
  renderItems: function() {
    this.$el.html(this.template({
      total: this.collection.getTotal()
    }));

    this.collection.each(function(model) {
      this.$('tbody').append(new CheckoutItemView({model: model}).$el);
    }.bind(this));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cartUpdated', this.renderItems);
  }
});