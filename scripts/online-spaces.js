/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var onlineSpacesWebsitePageViewsChart = document.getElementById('onlineSpacesWebsitePageViews')

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

