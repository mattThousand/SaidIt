SaidIt.Tweet = DS.Model.extend({
  emotion: DS.attr('string'),
  polarity: DS.attr('string'),
  tweeter: DS.belongsTo('tweeter')
});
