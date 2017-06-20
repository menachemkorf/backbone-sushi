var ProductView = Backbone.View.extend({
  tagName: 'li',
  template: JST.product,
  events: {
    'click': 'productDetails',
    'click .add_cart': 'addToCart'
  },
  attributes: function() {
    return {
      'data-id': this.model.get('id')
    }
  },
  productDetails: function(e) {
    var id = this.model.id
    router.navigate('/menu/' + id, { trigger: true });
  },
  addToCart: function(e) {
    e.preventDefault();
    e.stopPropagation();

    App.trigger('addToCart', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.delegateEvents();
  },
  initialize: function() {
    this.render();
  }
});