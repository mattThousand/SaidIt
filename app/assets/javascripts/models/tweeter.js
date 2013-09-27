SaidIt.Tweeter = DS.Model.extend({
  handle: DS.attr('string'),
  emotion: DS.attr('string'),
  polarity: DS.attr('string'),
  tweets: DS.hasMany('tweet', {async:true}),
  // pctJoy: Ember.reduceComputed.call(null, 'tweets', {
  //   initialValue: 0,
  //   addedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == "joy") {
  //       accum += 0.05;
  //     }
  //     console.log(accum);
  //     return accum;
  //   },
  //   removedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == "joy") {
  //       accum -= 0.05;
  //     }
  //     return accum;
  //   }
  // }),
  // pctAnger: Ember.reduceComputed.call(null, 'tweets', {
  //   initialValue: 0,
  //   addedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'anger') {
  //       accum += 0.05;
  //     }
  //     return accum;
  //   },
  //   removedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'anger') {
  //       accum -= 0.05;
  //     }
  //     return accum;
  //   }
  // }),
  // pctSadness: Ember.reduceComputed.call(null, 'tweets', {
  //   initialValue: 0,
  //   addedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'sadness') {
  //       accum += 0.05;
  //     }
  //     return accum;
  //   },
  //   removedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'sadness') {
  //       accum -= 0.05;
  //     }
  //     return accum;
  //   }
  // }),
  // pctSurprise: Ember.reduceComputed.call(null, 'tweets', {
  //   initialValue: 0,
  //   addedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'surprise') {
  //       accum += 0.05;
  //     }
  //     return accum;
  //   },
  //   removedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'surprise') {
  //       accum -= 0.05;
  //     }
  //     return accum;
  //   }
  // }),
  // pctFear: Ember.reduceComputed.call(null, 'tweets', {
  //   initialValue: 0,
  //   addedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'fear') {
  //       accum += 0.05;
  //     }
  //     return accum;
  //   },
  //   removedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'fear') {
  //       accum -= 0.05;
  //     }
  //     return accum;
  //   }
  // }),
  // pctDisgust: Ember.reduceComputed.call(null, 'tweets', {
  //   initialValue: 0,
  //   addedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'disgust') {
  //       accum += 0.05;
  //     }
  //     return accum;
  //   },
  //   removedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'disgust') {
  //       accum  -= 0.05;
  //     }
  //     return accum;
  //   }
  // }),
  // pctAmbiguous: Ember.reduceComputed.call(null, 'tweets', {
  //   initialValue: 0,
  //   addedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'ambiguous') {
  //       accum += 0.05;
  //     }
  //     return accum;
  //   },
  //   removedItem: function(accum, item, changeMeta, instanceMeta) {
  //     if (item.get('emotion') == 'ambiguous') {
  //       accum -= 0.05;
  //     }
  //     return accum;
  //   }
  // })


  pctJoy: function() {
    var tweets = this.get('tweets');
    var numJoy = tweets.filterProperty('emotion', 'joy').get('length');
    var total = 20;
    return (numJoy/total);
  }.property('tweets.@each.emotion'),

  // totalResponses: Ember.arrayComputed('questions', {
  //   initialValue: 0,
  //   addedItem: function(accum, item) {
  //     accum += item.get('totalResponses');
  //   },
  //   removedItem: function(accum, item) {
  //     accum -= item.get('totalResponses');
  //   }
  // })
  pctAnger: function() {
    var tweets = this.get('tweets');
    var numAnger = tweets.filterProperty('emotion', 'anger').get('length');
    var total = 20;
    return (numAnger/total);
  }.property('tweets.@each.emotion'),
  pctSadness: function() {
    var tweets = this.get('tweets');
    var numSadness = tweets.filterProperty('emotion', 'sadness').get('length');
    var total = 20;
    return (numSadness/total);
  }.property('tweets.@each.emotion'),
  pctFear: function() {
    var tweets = this.get('tweets');
    var numFear = tweets.filterProperty('emotion', 'fear').get('length');
    var total = 20;
    return (numFear/total);
  }.property('tweets.@each.emotion'),
  pctSurprise: function() {
    var tweets = this.get('tweets');
    var numSurprise = tweets.filterProperty('emotion', 'surprise').get('length');
    var total = 20;
    return (numSurprise/total);
  }.property('tweets.@each.emotion'),
  pctDisgust: function() {
    var tweets = this.get('tweets');
    var numDisgust = tweets.filterProperty('emotion', 'disgust').get('length');
    var total = 20;
    return (numDisgust/total);
  }.property('tweets.@each.emotion'),
  pctAmbiguous: function() {
    var tweets = this.get('tweets');
    var numAmbiguous = tweets.filterProperty('emotion', 'ambiguous').get('length');
    var total = 20;
    return (numAmbiguous/total);
  }.property('tweets.@each.emotion')
});
