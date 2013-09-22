SaidIt.DonutChartView = Ember.View.extend({
  classnames: ['chart'],

  chart: DonutChart(),

  didInsertElement: function() {
    Ember.run.once(this, 'updateChart');
  },

  updateChart: function() {
    if (this.get('isLoaded')) {
      debugger;
      d3.select(this.$()[0])
        .data([this.get('data')])
        .call(this.chart);
    }
  }.observes('data')
});
