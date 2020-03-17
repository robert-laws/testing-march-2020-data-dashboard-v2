/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var alumni = document.getElementById('qatarAlumni')
  var contractors = document.getElementById('qatarContractor')
  var faculty = document.getElementById('qatarFaculty');
  var staff = document.getElementById('qatarStaff');
  var undergraduates = document.getElementById('qatarUndergraduates');
  var uclqGrad = document.getElementById('uclqGraduate');
  var uclqFac = document.getElementById('ulcqFaculty');

  var myUCLQFacultyChart = new Chart(uclqFac, {
    type: 'line',
    data: {
      labels: ['2018','2019','2020'],
      datasets: [{
        label: 'Number of Loans',
        data: [417,663,204],
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
            suggestedMax: 1000
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
        text: 'UCLQ Faculty/Staff Loans',
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

  var myUCLQGraduateChart = new Chart(uclqGrad, {
    type: 'line',
    data: {
      labels: ['2018','2019','2020'],
      datasets: [{
        label: 'Number of Loans',
        data: [677,928,397],
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
            beginAtZero: false
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
        text: 'UCLQ Student Masters Loans',
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
  
  var myUndergraduateChart = new Chart(undergraduates, {
    type: 'line',
    data: {
      labels: ['2018','2019','2020'],
      datasets: [{
        label: 'Number of Loans',
        data: [3572,5388,1183],
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
            suggestedMax: 6000
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
        text: 'Qatar Undergraduate Loans',
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

  var myStaffChart = new Chart(staff, {
    type: 'line',
    data: {
      labels: ['2018','2019','2020'],
      datasets: [{
        label: 'Number of Loans',
        data: [680,894,176],
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
            beginAtZero: false
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
        text: 'Qatar Staff Loans',
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

  var myFacultyChart = new Chart(faculty, {
    type: 'line',
    data: {
      labels: ['2012','2013','2014','2015','2016','2017','2018','2019','2020'],
      datasets: [{
        label: 'Number of Loans',
        data: [106,112,128,222,282,447,1204,1324,327],
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
            suggestedMax: 6000
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
        text: 'Qatar Faculty Loans',
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

  var myChart2 = new Chart(contractors, {
    type: 'line',
    data: {
      labels: ['2018','2019','2020'],
      datasets: [{
        label: 'Number of Loans',
        data: [13,65,25],
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
            beginAtZero: false
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
        text: 'Qatar Contractor Loans',
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

  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(alumni, {
    type: 'line',
    data: {
      labels: [
        '2016',
        '2017',
        '2018',
        '2019',
        '2020'
      ],
      datasets: [{
        label: 'Number of Loans',
        data: [
          14,
          3,
          59,
          95,
          7
        ],
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
            beginAtZero: false
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
        text: 'Qatar Alumni Loans',
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

