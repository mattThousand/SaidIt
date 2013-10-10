SaidIt.showView = Ember.View.extend({
  classNames: ['show'],

  didInsertElement: function(){
    Ember.run.once(this, 'checkTweets')
    Ember.run.once(this, 'activateLoadIcon');
    Ember.run.debounce(this, 'updateEmotionData', 3000);
    Ember.run.later(this, function() {
      this.checkTweets();
    }, 500);
  },

  activateLoadIcon: function() {
    this.set('tweetsPresent', false);
    this.set('controller.stillLoading', true);
  },

  updateEmotionData: function() {
    if (this.get('controller.model')) {
      this.get('controller.model').reload();
      this.set('controller.stillLoading', false);
    }
  },

  checkTweets: function() {
    if (this.get('controller.model.tweets.length') > 0) {
      this.set('tweetsPresent', true);
    } else {
      this.set('tweetsPresent', false)
    }
    Ember.run.later(this, function() {
      this.checkTweets();
    }, 500);
  },

  checkForTweetData: function() {
    SaidIt.BarChart.eraseChart();
    var tweeter = this.get('controller.model');
    SaidIt.BarChart.drawChart("#sentiment_barchart",
                      1200, 
                      570, 
                      tweeter,
                      this.get('controller.model.pctJoy'),
                      this.get('controller.model.pctAnger'),
                      this.get('controller.model.pctSadness'),
                      this.get('controller.model.pctFear'),
                      this.get('controller.model.pctSurprise'),
                      this.get('controller.model.pctDisgust'),
                      this.get('controller.model.pctAmbiguous'));
  }.observes('tweetsPresent')

});
