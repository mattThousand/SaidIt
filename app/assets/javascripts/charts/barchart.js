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
    var margin, data;
    data = [
            [pctJoy, 1],
            [pctAnger, 2],
            [pctSadness, 3],
            [pctFear, 4],
            [pctSurprise, 5],
            [pctDisgust, 6],
            [pctAmbiguous, 7]
    ];
    margin = {
      top:30,
      right: 30,
      bottom: 30,
      left: 30
    };

    width = chartWidth - margin.left - margin.right;
    height = chartHeight - margin.top - margin.bottom;
//   xDomain = 12;
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
    yScale = d3.scale.linear().domain(yDomain).range([0, height]);
    getX = function(d) {
      return d[1]*10;
    },
    getY = function(d) {
      return yScale(d[0]);
    },
    attrs = {
      container: {
        width: chartWidth,
        height: chartHeight
      },
      graph: {
        transform: "translate(" + margin.left + "," + margin.top + ")"
      },
      rect: {
        "class": "rect",
        "x": getX,
        "y": getY,
        "width": "68",
        "height": getY
      }
    };


    chart = d3.select(chartSelector).append("svg").attr(attrs.container).append("g").attr(attrs.graph);
    chart.selectAll(".rect").data(data).enter().append("rect").attr(attrs.rect);
  }
});
