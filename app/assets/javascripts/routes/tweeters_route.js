SaidIt.TweetersRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('tweeter', params.tweeter_id);
  },
  setupController: function() {
    return this.controllerFor('application').set('currentRoute', 'tweeters');
  }
});

