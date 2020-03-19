/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var ministryCombinedChart = document.getElementById('ministryCombined')
  var byMinistryArabicChart = document.getElementById('ministryByArabic')
  var byMinistryForeignChart = document.getElementById('ministryByForeign')
  
  var myMinistryCombinedChart = new Chart(ministryCombinedChart, {
    type: 'bar',
    data: {
      labels: [
        'General Works',
        'Religion, Philosophy, Psychology',
        'Social Sciences',
        'Language. & Literature',
        'Science',
        'Technology',
        'Arts & Recreation',
        'History & Geography'
      ],
      datasets: [{
        label: 'Arabic',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          18,
          409,
          681,
          2974,
          26,
          7,
          33,
          1300
        ]
      }, {
        label: 'Foreign',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          85,
          9546,
          31137,
          9884,
          910,
          454,
          650,
          23444
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
            labelString: 'Classification Subjects'
          }
        }]
      },
      title: {
        display: true,
        text: 'Qatar Ministry Statistics',
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
  
  var myMinistryByArabicChart = new Chart(byMinistryArabicChart, {
    type: 'bar',
    data: {
      labels: [
        'General Works',
        'Religion, Philosophy, Psychology',
        'Social Sciences',
        'Language. & Literature',
        'Science',
        'Technology',
        'Arts & Recreation',
        'History & Geography'
      ],
      datasets: [{
        label: 'Arabic',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          18,
          409,
          681,
          2974,
          26,
          7,
          33,
          1300
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
            labelString: 'Classification Subjects'
          }
        }]
      },
      title: {
        display: true,
        text: 'Qatar Ministry Statistics - Arabic Titles Only',
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

  var myMinistryByForeignChart = new Chart(byMinistryForeignChart, {
    type: 'bar',
    data: {
      labels: [
        'General Works',
        'Religion, Philosophy, Psychology',
        'Social Sciences',
        'Language. & Literature',
        'Science',
        'Technology',
        'Arts & Recreation',
        'History & Geography'
      ],
      datasets: [{
        label: 'Foreign',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(23, 182, 92, 0.75)',
        data: [
          85,
          9546,
          31137,
          9884,
          910,
          454,
          650,
          23444
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
            labelString: 'Classification Subjects'
          }
        }]
      },
      title: {
        display: true,
        text: 'Qatar Ministry Statistics - Foreign Titles Only',
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

