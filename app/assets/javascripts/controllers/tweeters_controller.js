SaidIt.TweetersController = Ember.ArrayController.extend({
  init: function(controller) {
    this._super();
  },

  data: function() {
    if (this.get('model.isLoaded')) {
      var _this = this;

      var data = this.map(function() {
        return {
        };
      });
    }
  }
});
