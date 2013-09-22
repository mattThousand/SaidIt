SaidIt.DonutChartView = Ember.View.extend({
  classnames: ['chart'],

  chart: DonutChart(),

  didInsertElement: function() {
    Ember.run.once(this, 'updateChart');
  },

  updateChart: function() {

  }
});
