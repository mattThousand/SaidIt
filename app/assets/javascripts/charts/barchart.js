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
            [pctJoy, 1, "Joy: "+pctJoy, 25],
            [pctAnger, 2, "Anger: "+pctAnger, 25],
            [pctSadness, 3, "Sadness: "+pctSadness, 13],
            [pctFear, 4, "Fear: "+pctFear, 29],
            [pctSurprise, 5, "Surprise: "+pctSurprise, 17],
            [pctDisgust, 6, "Disgust: "+pctDisgust, 18],
            [pctAmbiguous, 7, "Ambiguous: "+pctAmbiguous, 1]
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
    var x = d3.scale.linear()
              .domain(xDomain)
              .range([0, width]);
    var y = d3.scale.linear()
              .domain(yDomain)
              .rangeRound([0, height]);

    var chart = d3.select(chartSelector).append("svg")
                  .attr("class", "chart")
                  .attr("width", width*data.length - 1)
                  .attr("height", height);

    getText = function(d) {
      return d[2];
    };

    getXOffset = function(d) {
      return d[3];
    }

    getX = function(d, i) { return (d[1]*150); };

    getY = function(d) { return Math.max(height - Math.max((d[0]*1000), 10), 50); };

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
            .attr("x", function(d, i) { return (d[1]*150); })
            .attr("y", function(d) { return Math.max(height - Math.max((d[0]*1000), 10), 50); })
            .attr("width", width/8)
            .attr("height", function(d) { return (Math.max(d[0]*1000, 10))});

    chart.append("line")
     .attr("x1", 0)
     .attr("x2", width * data.length)
     .attr("y1", height - .5)
     .attr("y2", height - .5)
     .style("stroke", "#2980b9");


    chart.selectAll(".text").data(data).enter().append("text").attr(attrs.text).text(getText);
    


    // xCounter = -1;
    // xScale = d3.scale.linear().domain(xDomain).rangeRound([0, width]);
    // yScale = d3.scale.linear().domain(yDomain).rangeRound([0, height]);
    // xAxis = d3.svg.axis().scale(xScale).tickValues(["Joy", "Anger", "Fear", "Surprise", "Disgust", "Sadness", "Ambiguous"]);
    // getX = function(d) {
    //   xCounter++;
    //   return xCounter*120;
    // },
    // getY = function(d) {
    //   return yScale(Math.max(d[0]*2, 0.01));
    // },
    // attrs = {
    //   container: {
    //     width: chartWidth,
    //     height: chartHeight
    //   },
    //   graph: {
    //     transform: "translate(" + margin.left + "," + margin.top + ")"
    //   },
    //   xAxis: {
    //     "class": 'axis-x',
    //     transform: "translate(0, 25)"
    //   },
    //   rect: {
    //     "class": "rect",
    //     "x": getX,
    //     "y": getY,
    //     "width": "68",
    //     "height": getY
    //   }
    // };


    // chart = d3.select(chartSelector).append("svg").attr(attrs.container).append("g").attr(attrs.graph);
    // debugger;
    // chart.append("g").attr(attrs.xAxis).call(xAxis);
    // chart.selectAll(".rect").data(data).enter().append("rect").attr(attrs.rect);
  }
});
