SaidIt.Tweeter = DS.Model.extend({
  handle: DS.attr('string'),
  emotion: DS.attr('string'),
  polarity: DS.attr('string'),
  tweets: DS.hasMany('tweet', {async:true}),
  total: function() {
    var tweets = this.get('tweets');
    return tweets.get('length');
  }.property('tweets'),
  pctJoy: function() {
    var tweets = this.get('tweets');
    var numJoy = tweets.filterProperty('emotion', 'joy').get('length');
    var total = this.get('total');
    return (numJoy/total);
    }.property('tweets.@each.emotion'),
  pctAnger: function() {
    var tweets = this.get('tweets');
    var numAnger = tweets.filterProperty('emotion', 'anger').get('length');
    var total = this.get('total');
    return (numAnger/total);
  }.property('tweets.@each.emotion'),
  pctSadness: function() {
    var tweets = this.get('tweets');
    var numSadness = tweets.filterProperty('emotion', 'sadness').get('length');
    var total = this.get('total');
    return (numSadness/total);
  }.property('tweets.@each.emotion'),
  pctFear: function() {
    var tweets = this.get('tweets');
    var numFear = tweets.filterProperty('emotion', 'fear').get('length');
    var total = this.get('total');
    return (numFear/total);
  }.property('tweets.@each.emotion'),
  pctSurprise: function() {
    var tweets = this.get('tweets');
    var numSurprise = tweets.filterProperty('emotion', 'surprise').get('length');
    var total = this.get('total');
    return (numSurprise/total);
  }.property('tweets.@each.emotion'),
  pctDisgust: function() {
    var tweets = this.get('tweets');
    var numDisgust = tweets.filterProperty('emotion', 'disgust').get('length');
    var total = this.get('total');
    return (numDisgust/total);
  }.property('tweets.@each.emotion'),
  pctAmbiguous: function() {
    var tweets = this.get('tweets');
    var numAmbiguous = tweets.filterProperty('emotion', 'ambiguous').get('length');
    var total = this.get('total');
    return (numAmbiguous/total);
  }.property('tweets.@each.emotion')
});
