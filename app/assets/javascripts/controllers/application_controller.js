SaidIt.ApplicationController = Ember.ArrayController.extend({
  init: function(controller) {
    this._super();
  },

  itemController: 'tweeter',

  actions: {
    save: function() {
      debugger;
    }
  }
});
