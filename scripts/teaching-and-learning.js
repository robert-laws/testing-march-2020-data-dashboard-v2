/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var teachingLearningEntriesChart = document.getElementById('teachingLearningEntries')
  var teachingLearningConsultationEntriesChart = document.getElementById('teachingLearningConsultationEntries')
  var teachingLearningInstructionEntriesChart = document.getElementById('teachingLearningInstructionEntries')
  var teachingLearningEntriesByLocationChart = document.getElementById('teachingLearningEntriesByLocation')
  var teachingLearningEntriesByQuestionChart = document.getElementById('teachingLearningEntriesByQuestion')
  var teachingLearningEntriesByPatronChart = document.getElementById('teachingLearningEntriesByPatron')
  var teachingLearningEntriesByTimeChart = document.getElementById('teachingLearningEntriesByTime')
  var teachingLearningConsultationsEntriesByTopicChart = document.getElementById('teachingLearningConsultationsEntriesByTopic')

  var myteachingLearningInstructionEntriesChart = new Chart(teachingLearningInstructionEntriesChart, {
    type: 'line',
    data: {
      labels: ['July 2019','August 2019','September 2019', 'October 2019', 'November 2019', 'December 2019', 'January 2020', 'February 2020', 'March 2020'],
      datasets: [{
        label: 'Number of Total Entries',
        data: [0, 0, 12, 8, 3, 1, 11, 9, 1],
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
            suggestedMax: 15
          },
          scaleLabel: {
            display: true,
            labelString: 'Instruction'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Months'
          }
        }]
      },
      title: {
        display: true,
        text: 'Library Instruction - Entries (July 2019 - June 2020)',
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

  var myTeachingLearningConsultationEntriesChart = new Chart(teachingLearningConsultationEntriesChart, {
    type: 'line',
    data: {
      labels: ['July 2019','August 2019','September 2019', 'October 2019', 'November 2019', 'December 2019', 'January 2020', 'February 2020', 'March 2020'],
      datasets: [{
        label: 'Number of Total Entries',
        data: [0, 4, 6, 18, 33, 9, 8, 9, 1],
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
            suggestedMax: 40
          },
          scaleLabel: {
            display: true,
            labelString: 'Consultations'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Months'
          }
        }]
      },
      title: {
        display: true,
        text: 'Library Consultations - Entries (July 2019 - June 2020)',
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

  var myTeachingLearningEntriesChart = new Chart(teachingLearningEntriesChart, {
    type: 'line',
    data: {
      labels: ['July 2019','August 2019','September 2019', 'October 2019', 'November 2019', 'December 2019', 'January 2020', 'February 2020', 'March 2020'],
      datasets: [{
        label: 'Number of Total Entries',
        data: [5, 87, 305, 211, 322, 102, 116, 117, 109],
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
            suggestedMax: 400
          },
          scaleLabel: {
            display: true,
            labelString: 'Entries'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Months'
          }
        }]
      },
      title: {
        display: true,
        text: 'Service Desk Analytics - Entries (July 2019 - June 2020)',
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

  var myTeachingLearningConsultationsEntriesByTopic = new Chart(teachingLearningConsultationsEntriesByTopicChart, {
    type: 'bar',
    data: {
      labels: [
        'Citing',
        'Collection Development',
        'Databases',
        'Evaluating Sources',
        'Guide Creation',
        'HoyaSearch',
        'Library Services Overview',
        'Multimedia',
        'Primary Sources',
        'RefWorks',
        'Search Strategy',
        'Software Instruction',
        'Teaching & Instruction'
      ],
      datasets: [{
        label: 'Number of Entries',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          7,9,7,16,2,34,5,1,27,1,45,9,5
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 50
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Entries'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Topic'
          }
        }]
      },
      title: {
        display: true,
        text: 'Library Consultations - Entries by Topic (July 2019 - June 2020)',
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
  
  var myTeachingLearningEntriesByLocationChart = new Chart(teachingLearningEntriesByLocationChart, {
    type: 'bar',
    data: {
      labels: [
        'Service Desk - Circulation',
        'Service Desk - Reference',
        'Librarians Office',
        'Email',
        'Telephone',
        'Roaming',
        'Chat'
      ],
      datasets: [{
        label: 'Number of Entries',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          770,
          345,
          41,
          130,
          10,
          68,
          10
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 900
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Entries'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Locations'
          }
        }]
      },
      title: {
        display: true,
        text: 'Service Desk Analytics - Entries by Location',
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

  var myTeachingLearningEntriesByQuestionChart = new Chart(teachingLearningEntriesByQuestionChart, {
    type: 'bar',
    data: {
      labels: [
        'Directional',
        'Services/Policies',
        'Ready Reference',
        'Research',
        'Technology Help'
      ],
      datasets: [{
        label: 'Number of Entries',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          283,
          595,
          309,
          60,
          129
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 900
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Entries'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Question Type'
          }
        }]
      },
      title: {
        display: true,
        text: 'Service Desk Analytics - Entries by Question Type',
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

  var myTeachingLearningEntriesByPatronChart = new Chart(teachingLearningEntriesByPatronChart, {
    type: 'bar',
    data: {
      labels: [
        'Alumni',
        'Faculty',
        'Staff',
        'Student',
        'UCL',
        'Visitor'
      ],
      datasets: [{
        label: 'Number of Entries',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          20,155,129,838,72,162
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 900
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Entries'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Patron Type'
          }
        }]
      },
      title: {
        display: true,
        text: 'Service Desk Analytics - Entries by Patron',
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
  
  var myTeachingLearningEntriesByTimeChart = new Chart(teachingLearningEntriesByTimeChart, {
    type: 'bar',
    data: {
      labels: [
        '1 minute or less',
        '1 - 5 minutes',
        '6 - 10 minutes',
        '11 - 15 minutes',
        '15+ minutes'
      ],
      datasets: [{
        label: 'Number of Entries',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [
          542,652,119,43,20
        ]
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 900
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Entries'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Transaction Time'
          }
        }]
      },
      title: {
        display: true,
        text: 'Service Desk Analytics - Entries by Transaction Time',
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

