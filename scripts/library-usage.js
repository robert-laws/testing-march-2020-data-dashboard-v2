/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var byFallWeekday = document.getElementById('byFallWeekday')
  var byFallSaturday = document.getElementById('byFallSaturday')
  
  var myByFallWeekday = new Chart(byFallWeekday, {
    type: 'bar',
    data: {
      labels: [
        '3:30PM',
        '4:30PM',
        '5:30PM',
        '6:30PM',
        '7:30PM',
        '8:30PM',
        '9:30PM',
        '10:30PM'
      ],
      datasets: [{
        label: 'GU-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          18,
          18,
          17,
          15,
          14,
          12,
          10,
          6
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          2,
          1,
          1,
          3,
          1,
          1,
          1,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          10,
          13,
          14,
          15,
          18,
          19,
          16,
          8
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of Patrons'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time of Day'
          }
        }]
      },
      hover: {
        animationDuration: 0
      },
      animation: {
        duration: 1,
        onComplete: function() {
          var chartInstance = this.chart,
          ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'bold', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function(dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function(bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          });
        }
      },
      title: {
        display: true,
        text: 'Fall 2019 Weekday Average',
        fontSize: 24,
        fontFamily: "'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
        fontStyle: 'normal'
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center'
      },
      tooltips: {
        titleFontSize: 20,
        bodyFontSize: 16,
        xPadding: 12,
        yPadding: 12
      }
    }
  })

  var myByFallSaturday = new Chart(byFallSaturday, {
    type: 'bar',
    data: {
      labels: [
        '3:30PM',
        '4:30PM',
        '5:30PM',
        '6:30PM',
        '7:30PM',
        '8:30PM',
        '9:30PM',
        '10:30PM'
      ],
      datasets: [{
        label: 'GU-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          7,
          12,
          13,
          10,
          8,
          6,
          7,
          4
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          8,
          13,
          17,
          18,
          19,
          16,
          13,
          4
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of Patrons'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time of Day'
          }
        }]
      },
      hover: {
        animationDuration: 0
      },
      animation: {
        duration: 1,
        onComplete: function() {
          var chartInstance = this.chart,
          ctx = chartInstance.ctx;
          ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'bold', Chart.defaults.global.defaultFontFamily);
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';

          this.data.datasets.forEach(function(dataset, i) {
            var meta = chartInstance.controller.getDatasetMeta(i);
            meta.data.forEach(function(bar, index) {
              var data = dataset.data[index];
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          });
        }
      },
      title: {
        display: true,
        text: 'Fall 2019 Saturday Average',
        fontSize: 24,
        fontFamily: "'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'",
        fontStyle: 'normal'
      },
      legend: {
        display: true,
        position: 'top',
        align: 'center'
      },
      tooltips: {
        titleFontSize: 20,
        bodyFontSize: 16,
        xPadding: 12,
        yPadding: 12
      }
    }
  })
}())

