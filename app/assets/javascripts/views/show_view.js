SaidIt.showView = Ember.View.extend({
  classNames: ['show'],

  didInsertElement: function(){
    Ember.run.debounce(this, 'updateEmotionData',3000);
  },

  updateEmotionData: function() {
    var _this = this;
    if (this.get('controller').get('model.isLoaded')) {
      var pctJoy = _this.get('controller.model.pctJoy');
    }
  }.observes('controller.tweetsLoaded')
});
