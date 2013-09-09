SaidIt.Tweeter = DS.Model.extend({
  emotion: DS.attr('string'),
  polarity: DS.attr('string'),
  net_emotion: DS.attr('string'),
  net_polarity: DS.attr('string')
});
