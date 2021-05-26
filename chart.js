// var ctx = document.getElementById('myChart').getContext('2d');
// var ctx2 = document.getElementById('myChart2').getContext('2d');
// var ctx3 = document.getElementById('myChart3').getContext('2d');
// var ctx4 = document.getElementById('myChart4').getContext('2d');


var ctx = document.getElementById('myChart');
var config = {
    type: 'bar',
    data: {
        labels: ['FY16','FY17','FY18','FY19'],
        datasets: [{
            label: "Market Share(%)",
            type: "line",
            backgroundColor: "rgba(7, 120, 196)",
            borderColor: "",
            borderWidth: 1,
            fill: false,
            // xAxisID: "axis-time",
            yAxisID: 'A',
            data: [0.63,0.70,0.75,0.79]
        },{
            label: "Average Market Share(%)",
            type: "line",
            backgroundColor: "rgba(58, 59, 59)",
            borderColor: "",
            borderWidth: 1,
            fill: false,
            // xAxisID: "axis-time",
            yAxisID: 'A',
            data: [0.22,0.25,0.28,0.31]
        },{
            label: "Industry",
            type: "bar",
            backgroundColor: "rgba(99, 193, 255, 0.4)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            fill: true,
            // xAxisID: "axis-bar",
            yAxisID: 'B',
            data: [110000,130000,135000,138000]
        }]
    },
    options: {
        reponsive:true,
        stacked:false,
        plugins: {
            title: {
                display: true,
                text: "GWP KES'M"
            }
        },
        
        // scales: {
        // yAxes: [
        //     {
        //       id: 'A',
        //       type: 'linear',
        //       position: 'right',
        //     //   grid:{
        //     //       drawOnChartArea:false,
        //     //   }
        //     },
        //     // {
        //     //     id: 'B',
        //     //     type: 'linear',
        //     //     position: 'right',

        //     //     grid:{
        //     //         drawOnChartArea:false,
        //     //     }
        //     //   }
        //   ]}
        scales: {
            B: {
              type: 'linear',
              display: true,
              position: 'left',
              
            },
            A: {
              type: 'linear',
              display: true,
              position: 'right',
              
      
              grid: {
                drawOnChartArea: false, // only want the grid lines for one axis to show up
              },
            //   ticks: {
            //     max: 1,
            //     min: 0
            //   }
            },
        }
        
    }

};
var myChart = new Chart(ctx, config);

// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


var ctx2 = document.getElementById('myChart2');
var config2 = {
    type: 'bar',
    data: {
        labels: ['FY16','FY17','FY18','FY19'],
        datasets: [{
            label: "Total Margin",
            type: "line",
            backgroundColor: "rgba(7, 120, 196)",
            borderColor: "",
            borderWidth: 1,
            fill: false,
            // xAxisID: "axis-time",
            data: [68,79,88,75]
        },{
            label: "U/W Margin",
            type: "line",
            backgroundColor: "#0000FF",
            borderColor: "#0000FF",
            borderWidth: 1,
            fill: false,
            // xAxisID: "axis-time",
            data: [15,11,20,12]
        },{
            label: "Opeating Expense Ratio",
            type: "bar",
            backgroundColor: "rgba(118, 126, 238, 0.4)",
            borderColor: "rgba(63, 66, 122)",
            borderWidth: 1,
            fill: true,
            // xAxisID: "axis-bar",
            data: [10,0,10,10]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Underwriting Vs. Technical Margin(%)'
            }
        },
    }

};
var myChart2 = new Chart(ctx2, config2);
// var myChart2 = new Chart(ctx2, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// var myChart3 = new Chart(ctx3, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// var myChart4 = new Chart(ctx4, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

var ctx3 = document.getElementById('myChart3');
var config3 = {
    type: 'bar',
    data: {
        labels: ['FY16','FY17','FY18','FY19'],
        datasets: [
        //     {
        //     label: "Universal",
        //     type: "bar",
        //     backgroundColor: "rgba(99, 193, 255, 0.4)",
        //     borderColor: "rgba(54, 162, 235, 1)",
        //     borderWidth: 1,
        //     fill: true,
        //     xAxisID: "axis-bar",
        //     data: [1900,2200,2400,2500]
        // },
        {
            label: "International Margin",
            type: "line",
            backgroundColor: "rgba(7, 120, 196)",
            borderColor: "",
            borderWidth: 1,
            fill: false,
            // xAxisID: "axis-time",
            data: [1400,1600,1600,2100]
        },{
            label: "Universal",
            type: "bar",
            backgroundColor: "rgba(99, 193, 255, 0.4)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            fill: true,
            // xAxisID: "axis-bar",
            data: [200,350,400,500]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Capital Generation'
            }
        },
    }

};
var myChart3 = new Chart(ctx3, config3);


var ctx4 = document.getElementById('myChart4');
var config4 = {
    type: 'bar',
    data: {
        labels: ['FY16','FY17','FY18','FY19'],
        datasets: [{
            label: "Net Technical Provision",
            type: "line",
            backgroundColor: "rgba(7, 120, 196)",
            borderColor: "",
            borderWidth: 1,
            fill: false,
            // xAxisID: "axis-time",
            yAxisID: 'B',
            data: [0,0,88,90]
        },{
            label: "xx",
            type: "bar",
            backgroundColor: "rgba(123, 166, 230, 0.4)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            fill: true,
            // xAxisID: "axis-bar",
            // yAxisID: 'A',
            data: [0,0,88,71]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Operating Profit Drivers(%)'
            }
        },
        // scales: {
        //     yAxes: [
        //         {
        //           id: 'A',
        //           stacked: true,
        //           type: 'linear',
        //           position: 'left',
        //         },
        //         {
        //             id: 'B',
        //             type: 'linear',
        //             position: 'right'
        //             // scalePositionLeft: true
        //           }
        //       ]}
        scales: {
            yAxes: [{
              id: 'A',
              type: 'linear',
              position: 'right',
            }, {
              id: 'B',
              type: 'linear',
              position: 'right',
              ticks: {
                max: 1,
                min: 0
              }
            }]
          }
    }

};
var myChart4 = new Chart(ctx4, config4);