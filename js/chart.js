//doughnut
  var ctxD = document.getElementById("doughnutChart").getContext('2d');
  var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
      labels: ["HTML", "CSS", "Javascript", "PHP"],
      datasets: [{
        data: [40, 30, 20, 10],
        backgroundColor: ["red", "cornflowerblue", "rgba(168,17,61,1)", "navy"],
        hoverBackgroundColor: ["darkred", "navy", "red", "cornflowerblue"]
      }]
    },
    options: {
      responsive: true
    }
  });