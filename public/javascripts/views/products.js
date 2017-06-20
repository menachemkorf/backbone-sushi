var ProductsView = Backbone.View.extend({
  tagName: 'ul',
  id: 'items',
  render: function() {
    this.$el.html('');
    this.collection.each(function(product) {
      this.$el.append(new ProductView({model: product}).$el);
    }.bind(this));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});