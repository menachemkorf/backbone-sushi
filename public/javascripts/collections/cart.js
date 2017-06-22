var Cart = Backbone.Collection.extend({
  setTotal: function() {
    this.total = this.toJSON().reduce(function(a, b) {
      return a + b.price * b.quantity;
    }, 0);

    return this;
  },
  getTotal: function() {
    return this.total;
  },
  addItem: function(item) {
    var existing = this.get(item.get('id'));

    if (existing) {
      existing.set('quantity', existing.get('quantity') + 1);
    } else {
      existing = item.clone();
      existing.set('quantity', 1);
      this.add(existing);
    }

    this.update();
  },
  decrement: function(item) {
    var existing = this.get(item.get('id'));
    existing.set('quantity', existing.get('quantity') - 1);
    if (existing.get('quantity') <= 0) {
      this.remove(existing);
    }

    this.update();
  },
  update: function() {
    this.setTotal();
    this.trigger('cartUpdated');
  },
});