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
            [pctJoy, 1, "Joy: "+pctJoy*100+"%", -60],
            [pctAnger, 2, "Anger: "+pctAnger*100+"%", -60],
            [pctSadness, 3, "Sadness: "+pctSadness*100+"%", -72],
            [pctFear, 4, "Fear: "+pctFear*100+"%", -56],
            [pctSurprise, 5, "Surprise: "+pctSurprise*100+"%", -73],
            [pctDisgust, 6, "Disgust: "+pctDisgust*100+"%", -70],
            [pctAmbiguous, 7, "Ambiguous: "+pctAmbiguous*100+"%", -84]
    ];
    margin = {
      top: 30,
      right: 30,
      bottom: 30,
      left: 30
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
    var x = d3.scale.linear()
              .domain(xDomain)
              .range([0, width]);
    var y = d3.scale.linear()
              .domain(yDomain)
              .rangeRound([0, height]);

    var chart = d3.select(chartSelector).append("svg")
                  .attr("class", "chart")
                  .attr("width", width)
                  .attr("height", height);

    getText = function(d) {
      return d[2];
    };

    getXOffset = function(d) {
      return d[3];
    }

    getX = function(d, i) { return (d[1]*150); };

    getY = function(d) { return Math.max(height - Math.max((d[0]*1000), 10), 50); };

    onMouseOver = function(d, i) {
      return d3.select(this).classed('over', true);
    };

    onMouseOut = function(d, i) {
      return d3.select(this).classed('over', false);
    };

    var attrs ={
      text: {
        "fill": "#2980b9",
        "x": getX,
        "y": getY,
        "dx": getXOffset,
        "dy": -10
      }
    };

    chart.selectAll("rect")
            .data(data)
          .enter().append("rect")
            .attr("x", function(d, i) { return ((d[1]-1)*150+50); })
            .attr("y", function(d) { return Math.max(height - Math.max((d[0]*1000), 10), 50); })
            .attr("width", width/8)
            .attr("height", function(d) { return (Math.max(d[0]*1000, 10))});

    chart.append("line")
     .attr("x1", 0)
     .attr("x2", width * data.length)
     .attr("y1", height - .5)
     .attr("y2", height - .5)
     .style("stroke", "#f5f5f5");

    chart.selectAll(".text").data(data).enter().append("text").attr(attrs.text).text(getText);
    chart.selectAll(".rect").data(data).enter().append("rect").attr(attrs.rect).on("mouseover", onMouseOver).on("mouseout", onMouseOut);

  
  },

  eraseChart: function() {
    d3.select("svg")
      .remove();
  }

});
