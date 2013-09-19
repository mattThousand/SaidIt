SaidIt.Tweeter = DS.Model.extend({
  emotion: DS.attr('string'),
  polarity: DS.attr('string'),
  tweets: DS.hasMany('tweet')
});
