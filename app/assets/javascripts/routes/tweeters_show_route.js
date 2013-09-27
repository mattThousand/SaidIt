SaidIt.TweeterRoute = Ember.Route.extend({
  model: function(params) {
    return SaidIt.Tweeter.find(params(tweeter_id));
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    return this.controllerFor('application').set('currentRoute', 'tweeters');
  }
});

