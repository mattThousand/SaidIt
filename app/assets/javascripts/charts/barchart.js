SaidIt.BarChart = Ember.Object.extend();

SaidIt.BarChart.reopenClass({
  drawChart: function(chartSelector, 
                        chartWidth, 
                        chartHeight, 
                        tweeter, 
                        pctJoy,
                        pctAnger,
                        pctSadness,
                        pctFear,
                        pctSurprise,
                        pctDisgust,
                        pctAmbiguous) {
    var margin;
    margin = {
      top:30,
      right: 30,
      bottom: 30,
      left: 30
    };

    width = chartWidth - margin.left - margin.right;
    height = chartHeight - margin.top - margin.bottom;
   xDomain = 12;
    yDomain = [
      0, Math.max(
              pctJoy,
              pctAnger,
              pctSadness,
              pctFear,
              pctSurprise,
              pctDisgust,
              pctAmbiguous 
            )
      ];
    attrs = {
      container: {
        width: chartWidth,
        height: chartHeight
      },
      graph: {
        transform: "translate(" + margin.left + "," + margin.top + ")"
      }
    };

    debugger;

    chart = d3.select(chartSelector).append("svg").attr(attrs.container).append("g").attr(attrs.graph);
  }
});
