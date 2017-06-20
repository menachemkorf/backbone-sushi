var CheckoutItemView = Backbone.View.extend({
  tagName: 'tr',
  template: JST.checkout_item,
  events: {
      'click .fa-plus': 'increment',
      'click .fa-minus': 'decrement'
  },
  attributes: function() {
    return {
      'data-id': this.model.get('id')
    }
  },
  increment: function() {
    this.model.collection.addItem(this.model);
  },
  decrement: function() {
    this.model.collection.decrement(this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  initialize: function() {
    this.render();
  }
});