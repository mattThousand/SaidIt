SaidIt.TweetersShowController = Ember.ObjectController.extend({
  init: function() {
    this._super();
  },
  tweetsLoaded: function() {
    pctJoy = this.get('model').get('pctJoy');
    console.log(pctJoy);
    debugger;
    return pctJoy;
  }.property('tweets', 'pctJoy')
});
