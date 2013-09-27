SaidIt.TweetersShowController = Ember.ObjectController.extend({
  init: function() {
    this._super();
  },
  tweetsLoaded: function() {
    var numTweets = this.get('model').get('tweets').length;
    if (!(numTweets > 0)) { 
    }
    return numTweets;
  }.property('tweets')
});
