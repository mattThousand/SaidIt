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
      top: 0,
      right: 30,
      bottom: 30,
      left: 0
    };

    width = chartWidth - margin.left - margin.right;
    height = chartHeight - margin.top - margin.bottom;
    xDomain = [1, data.length];
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
    xCounter = -1;
    yScale = d3.scale.linear().domain(yDomain).range([0, height]);
    getX = function(d) {
      xCounter++;
      return xCounter*120;
    },
    getY = function(d) {
      return yScale(Math.max(d[0]*2, 0.01));
    },
    attrs = {
      container: {
        width: chartWidth,
        height: chartHeight
      },
      graph: {
        transform: "translate(" + margin.left + "," + margin.top + ")"
      },
      xAxis: {
        "class": 'axis-x',
        transform: "translate(0, 25)"
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
    chart.append("g").attr(attrs.xAxis).call(xAxis);
    chart.selectAll(".rect").data(data).enter().append("rect").attr(attrs.rect);
  }
});
