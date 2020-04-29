/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var byFallWeekday = document.getElementById('byFallWeekday');
  var byFallSaturday = document.getElementById('byFallSaturday');
  var byFallDec5 = document.getElementById('byFallDec5');
  var byFallDec6 = document.getElementById('byFallDec6');
  var byFallDec7 = document.getElementById('byFallDec7');
  var byFallDec12 = document.getElementById('byFallDec12');
  var byFallDec13 = document.getElementById('byFallDec13');
  var byFallDec11PM = document.getElementById('byFallDec11PM');

  
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

  var myByFallDec5 = new Chart(byFallDec5, {
    type: 'bar',
    data: {
      labels: [
        '7:30PM',
        '8:30PM',
        '9:30PM',
        '10:30PM',
        '11:30PM'
      ],
      datasets: [{
        label: 'GU-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          36,
          32,
          19,
          20,
          11
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          1,
          0,
          0,
          0,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          10,
          10,
          9,
          10,
          2
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
        text: 'Fall 2019 Extended Hours - Thursday, December 5',
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

  var myByFallDec6 = new Chart(byFallDec6, {
    type: 'bar',
    data: {
      labels: [
        '4:30PM',
        '5:30PM',
        '6:30PM',
        '7:30PM',
        '8:30PM',
        '9:30PM',
        '10:30PM',
        '11:30PM'
      ],
      datasets: [{
        label: 'GU-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          16,
          19,
          22,
          13,
          13,
          17,
          14,
          15
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          8,
          10,
          15,
          11,
          14,
          10,
          3,
          3
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
        text: 'Fall 2019 Extended Hours - Friday, December 6',
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

  var myByFallDec12 = new Chart(byFallDec12, {
    type: 'bar',
    data: {
      labels: [
        '6:30PM',
        '7:30PM',
        '8:30PM',
        '9:30PM',
        '10:30PM',
        '11:30PM'
      ],
      datasets: [{
        label: 'GU-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          14,
          17,
          15,
          13,
          8,
          6
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          1,
          1,
          2,
          2,
          1,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          6,
          10,
          12,
          11,
          10,
          3
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
        text: 'Fall 2019 Extended Hours - Thursday, December 12',
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

  var myByFallDec13 = new Chart(byFallDec13, {
    type: 'bar',
    data: {
      labels: [
        '4:30PM',
        '5:30PM',
        '6:30PM',
        '7:30PM',
        '8:30PM',
        '9:30PM',
        '10:30PM',
        '11:30PM'
      ],
      datasets: [{
        label: 'GU-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          5,
          11,
          11,
          9,
          12,
          10,
          9,
          9
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
          0,
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
          10,
          12,
          13,
          8,
          5,
          3
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
        text: 'Fall 2019 Extended Hours - Friday, December 13',
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

  var myByFallDec7 = new Chart(byFallDec7, {
    type: 'bar',
    data: {
      labels: [
        '4:30PM',
        '5:30PM',
        '6:30PM',
        '7:30PM',
        '8:30PM',
        '9:30PM',
        '10:30PM',
        '11:30PM'
      ],
      datasets: [{
        label: 'GU-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          19,
          26,
          31,
          25,
          17,
          23,
          15,
          10
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          0,
          1,
          1,
          1,
          0,
          0,
          0,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          7,
          22,
          25,
          22,
          25,
          11,
          10,
          3
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
        text: 'Fall 2019 Extended Hours - Saturday, December 7',
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

  var myByFallDec11PM = new Chart(byFallDec11PM, {
    type: 'bar',
    data: {
      labels: [
        'Dec 5',
        'Dec 6',
        'Dec 7',
        'Dec 8',
        'Dec 9',
        'Dec 10',
        'Dec 11',
        'Dec 12',
        'Dec 13'
      ],
      datasets: [{
        label: 'GU-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          11,
          15,
          10,
          12,
          16,
          11,
          6,
          6,
          9
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          0,
          0,
          0,
          0,
          2,
          0,
          4,
          0,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          2,
          3,
          3,
          6,
          7,
          5,
          3,
          3,
          3
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
        text: 'Fall 2019 Extended Hours - 11:30PM',
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
  
  var myBySpringWeekday = new Chart(bySpringWeekday, {
    type: 'bar',
    data: {
      labels: [
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
          13,
          13,
          11,
          8,
          6
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          2,
          2,
          1,
          0,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          17,
          17,
          17,
          12,
          6
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
        text: 'Spring 2020 Weekday Average',
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

  var myBySpringSaturday = new Chart(bySpringSaturday, {
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
          10,
          12,
          11,
          9,
          8,
          8,
          4
        ]
      }, {
        label: 'UCL-Q',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(153, 22, 42, 0.75)',
        data: [
          0,
          1,
          1,
          1,
          2,
          1,
          0,
          0
        ]
      }, {
        label: 'Visitors',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          9,
          19,
          18,
          21,
          21,
          18,
          11,
          5
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
        text: 'Spring 2020 Saturday Average',
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

