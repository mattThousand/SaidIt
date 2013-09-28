SaidIt.showView = Ember.View.extend({
  classNames: ['show'],

  didInsertElement: function(){
    Ember.run.debounce(this, 'updateEmotionData', 8000);
  },

  updateEmotionData: function() {
    this.get('controller.model').reload();
  }
});
