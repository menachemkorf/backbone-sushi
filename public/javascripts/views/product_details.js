var ProductDetailsView = Backbone.View.extend({
  id: 'item_details',
  template: JST.product_details,
  events: {
    'click .next': 'nextProduct',
    'click .prev': 'prevProduct',
    'click .close': 'closeProduct',
    'click .add_cart': 'addToCart',
  },
  nextProduct: function(e) {
    e.preventDefault();
    var nextId = this.getNextId(this.model.id);
    router.navigate('/menu/' + nextId, { trigger: true });
  },
  prevProduct: function(e) {
    e.preventDefault();
    var prevId = this.getPrevId(this.model.id);
    router.navigate('/menu/' + prevId, { trigger: true });
  },
  closeProduct: function(e) {
    e.preventDefault();
    router.navigate('/menu', { trigger: true });
  },
  getNextId: function(id) {
    return id === App.products.length ? 1 : id + 1;
  },
  getPrevId: function(id) {
    return id === 1 ? App.products.length : id - 1;
  },
  addToCart: function(e) {
    e.preventDefault();
    App.trigger('addToCart', this.model);
  },
  render: function() {
    this.$el.html(this.template( this.model.toJSON() ));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});