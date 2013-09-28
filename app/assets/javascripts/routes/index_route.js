SaidIt.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('tweeters.new');
  }
});


