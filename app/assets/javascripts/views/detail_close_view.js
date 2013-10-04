SaidIt.detailCloseView = Ember.View.extend({
  click: function() {
    return this.get('controller').set('modalActivated', false);
  }
});
