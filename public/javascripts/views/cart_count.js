var CartCountView = Backbone.View.extend({
  attributes: {
    class: 'cart'
  },
  template: JST.cart_count,
  render: function() {
    $('.cart').remove();
    this.$el.html(this.template(this.collection.length));
    $('body > header').append(this.$el);
  },
  initialize: function() {
    this.render();
    this.stopListening(this.collection, 'cartUpdated');
    this.listenTo(this.collection, 'cartUpdated', this.render);
  }
});