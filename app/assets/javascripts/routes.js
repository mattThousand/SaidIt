SaidIt.Router.reopen({
  rootURL: '/',
  location: 'history'
});

SaidIt.Router.map(function() {
  this.resource('tweeters', function() {
    this.route('new');
    this.route('show', { path: '/:tweeter_id'});
    this.resource('tweet', {
      path: '/tweet/:tweet_id'
    });
  });
});

SaidIt.TweetRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('tweet', params.tweet_id);
  }
});

SaidIt.ApplicationRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('tweeter', params.tweeter_id);
  }
});

SaidIt.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('tweeters.new');
  }
});

SaidIt.TweetersRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('tweeter', params.tweeter_id);
  },
  setupController: function() {
    return this.controllerFor('application').set('currentRoute', 'tweeters');
  }
});

SaidIt.TweetersNewRoute = SaidIt.TweetersRoute.extend({
  model: function() {
    return this.get('store').createRecord('tweeter');
  },
  setupController: function(controller, model) {
    return this.controller.set('content', model);
  }
});

SaidIt.TweeterRoute = Ember.Route.extend({
  model: function(params) {
    return SaidIt.Tweeter.find(params(tweeter_id));
  },
  setupController: function(controller, model) {
    controller.set('content', model);
    return this.controllerFor('application').set('currentRoute', 'tweeters');
  }
});
