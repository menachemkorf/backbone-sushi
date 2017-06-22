var CartCountView = Backbone.View.extend({
  attributes: {
    class: 'cart'
  },
  events: {
    'click a': 'preventDefault'
  },
  template: JST.cart_count,
  preventDefault: function(e) {
    e.preventDefault();
  },
  render: function() {
    this.upateCount();
    $('body > header').append(this.$el);
  },
  upateCount: function() {
    this.$el.html(this.template(this.collection.length));
  },
  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cartUpdated reset', this.upateCount);
  }
});