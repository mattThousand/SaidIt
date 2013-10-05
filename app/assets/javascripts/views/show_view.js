SaidIt.showView = Ember.View.extend({
  classNames: ['show'],

  didInsertElement: function(){
    Ember.run.once(this, 'activateLoadIcon');
    Ember.run.debounce(this, 'updateEmotionData', 3000);
  },

  activateLoadIcon: function() {
    this.set('controller.stillLoading', true);
  },

  updateEmotionData: function() {
    if (this.get('controller.model')) {
      this.get('controller.model').reload();
      this.set('controller.stillLoading', false);
    }
  }
});
