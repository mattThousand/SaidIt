SaidIt.TweetersNewRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').createRecord('tweeter');
  },
  setupController: function(controller, model) {
    return this.controller.set('content', model);
  }
});

