SaidIt.TweetRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('tweet', params.tweet_id);
  }
});

