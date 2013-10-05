SaidIt.chartView = Ember.View.extend({

  didInsertElement: function() {
    Ember.run.once(this, 'renderBarChart');
  },

  renderBarChart: function() {
    debugger;
    if (!this.get('controller.stillLoading')) {
      var tweeter = this.get('controller.model');
      SaidIt.BarChart.drawChart("#sentiment_barchart",
                        900, 
                        365, 
                        tweeter,
                        this.get('controller.model.pctJoy'),
                        this.get('controller.model.pctAnger'),
                        this.get('controller.model.pctSadness'),
                        this.get('controller.model.pctFear'),
                        this.get('controller.model.pctSurprise'),
                        this.get('controller.model.pctDisgust'),
                        this.get('controller.model.pctAmbiguous'));
    }
  }

});
