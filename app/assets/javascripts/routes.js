SaidIt.Router.reopen({
  rootURL: '/'
});

SaidIt.Router.map(function() {
  this.resource('tweeters', function() {
    this.route('new');
  });
});


SaidIt.ApplicationRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('tweeter', params.tweeter_id);
  },

  redirect: function() {
    this.transitionTo('tweeters.new');
  }
});

SaidIt.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('tweeters.new');
  }
});
