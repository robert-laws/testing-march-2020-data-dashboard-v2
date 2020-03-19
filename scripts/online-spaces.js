/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var onlineSpacesWebsitePageViewsChart = document.getElementById('onlineSpacesWebsitePageViews')
  var onlineSpacesWebsiteAcquisitionChart = document.getElementById('onlineSpacesWebsiteAcquisition')
  var onlineSpacesLibGuidesPageViewsChart = document.getElementById('onlineSpacesLibGuidesPageViews')
  var onlineSpacesLibGuidesAcquisitionChart = document.getElementById('onlineSpacesLibGuidesAcquisition')

  var myOnlineSpacesLibGuidesPageViewsChart = new Chart(onlineSpacesLibGuidesPageViewsChart, {
    type: 'line',
    data: {
      labels: ['July 2019','August 2019','September 2019', 'October 2019', 'November 2019', 'December 2019', 'January 2020', 'February 2020', 'March 2020'],
      datasets: [{
        label: 'Number of Page Views',
        data: [794, 870, 1850, 2475, 1729, 678, 1262, 2239, 1135],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBorderWidth: 10,
        pointHoverBorderWidth: 12,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            suggestedMax: 9000
          },
          scaleLabel: {
            display: true,
            labelString: 'Items'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Years'
          }
        }]
      },
      title: {
        display: true,
        text: 'GU-Q LibGuides - Page Views (July 2019 - June 2020)',
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

  var myOnlineSpacesLibGuidesAcquisitionChart = new Chart(onlineSpacesLibGuidesAcquisitionChart, {
    type: 'pie',
    data: {
      labels: [
        'Organic Search',
        'Direct',
        'Referral',
        'Social'
      ],
      datasets: [{
        label: 'Number of Items',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [2346, 1089, 1056, 17],
        backgroundColor: [
          '#18f084',
          '#4287f5',
          '#f03a4f',
          '#DD23A1'
        ]
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'GU-Q LibGuides- Acquisition Sources',
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

  var myOnlineSpacesWebsiteAcquisitionChart = new Chart(onlineSpacesWebsiteAcquisitionChart, {
    type: 'pie',
    data: {
      labels: [
        'Direct',
        'Organic Search',
        'Referral',
        'Social'
      ],
      datasets: [{
        label: 'Number of Items',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [10909, 3832, 869, 3],
        backgroundColor: [
          '#4287f5',
          '#18f084',
          '#f03a4f',
          '#DD23A1'
        ]
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'GU-Q Library Website - Acquisition Sources',
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
  
  var myOnlineSpacesWebsitePageViewsChart = new Chart(onlineSpacesWebsitePageViewsChart, {
    type: 'line',
    data: {
      labels: ['July 2019','August 2019','September 2019', 'October 2019', 'November 2019', 'December 2019', 'January 2020', 'February 2020', 'March 2020'],
      datasets: [{
        label: 'Number of Page Views',
        data: [3673, 3235, 8173, 7185, 7915, 5038, 5237, 6417, 3195],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBorderWidth: 10,
        pointHoverBorderWidth: 12,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            suggestedMax: 9000
          },
          scaleLabel: {
            display: true,
            labelString: 'Items'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Years'
          }
        }]
      },
      title: {
        display: true,
        text: 'GU-Q Library Website - Page Views (July 2019 - June 2020)',
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

