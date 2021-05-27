$(window).load(function() {  
    $("#loader").fadeOut(2000);
 });

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
                // text: "GWP KES'M"
            }
        },
        
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
                drawOnChartArea: false, 
              },
            },
        }
        
    }

};
var myChart = new Chart(ctx, config);


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
                // text: 'Underwriting Vs. Technical Margin(%)'
            }
        },
    }

};
var myChart2 = new Chart(ctx2, config2);


var ctx3 = document.getElementById('myChart3');
var config3 = {
    type: 'bar',
    data: {
        labels: ['FY16','FY17','FY18','FY19'],
        datasets: [
            
        {
            label: "International Margin",
            type: "line",
            backgroundColor: "rgba(7, 120, 196)",
            borderColor: "",
            borderWidth: 1,
            fill: false,
            // xAxisID: "axis-time",
            yAxisID: 'B',
            data: [140,170,170,190]
        },{
            label: "Universal",
            type: "bar",
            backgroundColor: "rgba(99, 193, 255, 0.4)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            fill: true,
            yAxisID: 'A',
            // xAxisID: "axis-bar",
            data: [200,350,400,500]
        },{
            label: "XX",
            type: "bar",
            backgroundColor: "rgba(101, 102, 102, 0.4)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            fill: true,
            // xAxisID: "axis-bar",
            yAxisID: 'A',
            data: [1900,2200,2400,2500]
        },]
    },
    options: {
        plugins: {
            title: {
                display: true,
                // text: 'Capital Generation'
            }
        },
        scales: {
            x: {
                stacked: true,
              },
            //   y: {
            //     stacked: true
            //   },
            A: {
              type: 'linear',
              display: true,
              position: 'left',
              
            },
            B: {
              type: 'linear',
              display: true,
              position: 'right',
      
              grid: {
                drawOnChartArea: false, 
              },
            //   ticks: {
            //     max: 1,
            //     min: 0
            //   }
            },
        }
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
            data: [0,0,2.25,2.5]
        },{
            label: "xx",
            type: "bar",
            backgroundColor: "rgba(123, 166, 230, 0.4)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            fill: true,
            // xAxisID: "axis-bar",
            yAxisID: 'A',
            data: [0,0,88,71]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                // text: 'Operating Profit Drivers(%)'
            }
        },
        scales: {
            A: {
              type: 'linear',
              display: true,
              position: 'left',
              
            },
            B: {
              type: 'linear',
              display: true,
              position: 'right',
      
              grid: {
                drawOnChartArea: false, 
              },
            //   ticks: {
            //     max: 1,
            //     min: 0
            //   }
            },
        }
    }

};
var myChart4 = new Chart(ctx4, config4);