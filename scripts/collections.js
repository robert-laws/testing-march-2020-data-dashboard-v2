/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var byLocationChart = document.getElementById('byLocation')
  var byLocationNoStacksChart = document.getElementById('byLocationNoStacks')
  var byMaterialTypeChart = document.getElementById('byMaterialType')
  var byMaterialTypeElectronicChart = document.getElementById('byMaterialTypeElectronic')
  
  var myByMaterialTypeElectronicChart = new Chart(byMaterialTypeElectronicChart, {
    type: 'bar',
    data: {
      labels: [
        'Book',
        'Journal',
        'Document',
        'Streaming Video',
        'Proceeding',
        'Newspaper',
        'Report',
        'Streaming Audio',
        'Map',
        'Conference',
        'Other Visual Material',
        'Wire',
        'Series',
        'Unknown',
        'Manuscript',
        'Transcript',
        'Video',
        'Dissertation',
        'Sound Recording',
        'Database',
        'Website',
        'Musical Score',
        'Data Set'
      ],
      datasets: [{
        label: 'Number of Items',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          1285169,
          270336,
          133348,
          94704,
          31241,
          25758,
          16981,
          7198,
          6568,
          5509,
          1621,
          976,
          707,
          346,
          139,
          136,
          101,
          23,
          22,
          15,
          9,
          5,
          1
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of Items'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Material Type'
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
        text: 'Qatar Collection - Total Electronic Items by Material Type',
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
  
  var myByMaterialTypeChart = new Chart(byMaterialTypeChart, {
    type: 'bar',
    data: {
      labels: [
        'Book',
        'DVD',
        'Issue',
        'Microfilm',
        'Map',
        'Compact Disc',
        'Microform',
        'Equipment',
        'Sound Recording',
        'CD-ROM',
        'Unknown',
        'Chart',
        'Video Game',
        'None',
        'Kit',
        'Music Score',
        'Other'
      ],
      datasets: [{
        label: 'Number of Items',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          105747,
          4392,
          3603,
          1297,
          166,
          131,
          112,
          108,
          76,
          55,
          32,
          18,
          16,
          11,
          1,
          1,
          0
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of Items'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Material Type'
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
        text: 'Qatar Collection - Total Items by Material Type',
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
  
  var myByLocationNoStacksChart = new Chart(byLocationNoStacksChart, {
    type: 'bar',
    data: {
      labels: [
        'UCLQ Periodicals',
        'Media',
        'UCLQ Stacks Oversize',
        'Microfiche Room',
        'UCLQ Short Loan',
        'Periodical Stacks',
        'Circulation Desk',
        'Travel',
        'Oversized',
        'Map Cabinet',
        'Course Reserves',
        'Qatar Library',
        'Reference Desk'
      ],
      datasets: [{
        label: 'Number of Items',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          2902,
          2504,
          1982,
          1452,
          1395,
          663,
          386,
          336,
          293,
          82,
          45,
          3,
          1
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of Items'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Locations'
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
        text: 'Qatar Collection - Total Items by Location (without GUQ or UCLQ Stacks)',
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
  
  var myByLocationChart = new Chart(byLocationChart, {
    type: 'bar',
    data: {
      labels: [
        'Stacks',
        'UCLQ Stacks',
        'UCLQ Periodicals',
        'Media',
        'UCLQ Stacks Oversize',
        'Microfiche Room',
        'UCLQ Short Loan',
        'Periodical Stacks',
        'Circulation Desk',
        'Travel',
        'Oversized',
        'Map Cabinet',
        'Course Reserves',
        'Qatar Library',
        'Reference Desk'
      ],
      datasets: [{
        label: 'Number of Items',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 52, 122, 0.75)',
        data: [
          86024,
          17697,
          2902,
          2504,
          1982,
          1452,
          1395,
          663,
          386,
          336,
          293,
          82,
          45,
          3,
          1
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Number of Items'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Locations'
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
        text: 'Qatar Collection - Total Items by Location',
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

