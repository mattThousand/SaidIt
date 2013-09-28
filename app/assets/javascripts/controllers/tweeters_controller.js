SaidIt.TweetersController = Ember.ArrayController.extend({
  init: function(controller) {
    this._super();
  },

  itemController: ['tweet']
});
