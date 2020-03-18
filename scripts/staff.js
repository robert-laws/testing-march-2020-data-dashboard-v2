/* globals Chart:false */

(function () {
  'use strict'

  // Graphs
  var libraryStaffChart = document.getElementById('libraryStaff')
  
  var myLibraryStaffChart = new Chart(libraryStaffChart, {
    type: 'pie',
    data: {
      labels: [
        'Librarians',
        'Paraprofessionals',
        'Library Assistants'
      ],
      datasets: [{
        label: 'Number of Items',
        barPercentage: 0.75,
        minBarLength: 2,
        backgroundColor: 'rgba(53, 82, 142, 0.75)',
        data: [5, 1, 4],
        backgroundColor: [
          '#4287f5',
          '#18f084',
          '#f03a4f'
        ]
      }]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'Library Staff - 2020',
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

