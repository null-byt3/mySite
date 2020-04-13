var pieChart = document.getElementById('pieChart').getContext('2d');
var doughnutChart = document.getElementById('doughnutChart').getContext('2d');

			var randomValue = function() {
				return Math.round(Math.random() * 100);
			}

			var chart = new Chart(pieChart, {
			    // The type of chart we want to create
			    type: 'pie',

			    // The data for our dataset
			    data: {
			        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
			        datasets: [{
			            label: 'My First dataset',
			            backgroundColor: [
			            'rgba(231, 76, 60 ,1)',
			            'rgba(133, 193, 233 ,1)',
			            'rgba(39, 174, 96,1)',
			            'rgba(247, 220, 111,1)',
			            'rgba(125, 60, 152,1)'],
			            borderColor: 'rgb(255, 255, 255)',
			            data: [randomValue(), randomValue(), randomValue(), randomValue(), randomValue()]
			        }]
			    },

			    // Configuration options go here
			    options: {
			    	responsive: false
			    }
			});

			var chart2 = new Chart(doughnutChart, {
			    // The type of chart we want to create
			    type: 'doughnut',

			    // The data for our dataset
			    data: {
			        labels: ['Red', 'Blue', 'Green', 'Yellow', 'Purple'],
			        datasets: [{
			            label: 'My First dataset',
			            backgroundColor: [
			            'rgba(231, 76, 60 ,1)',
			            'rgba(133, 193, 233 ,1)',
			            'rgba(39, 174, 96,1)',
			            'rgba(247, 220, 111,1)',
			            'rgba(125, 60, 152,1)'],
			            borderColor: 'rgb(255, 255, 255)',
			            data: [randomValue(), randomValue(), randomValue(), randomValue(), randomValue()]
			        }]
			    },

			    // Configuration options go here
			    options: {
			    	responsive: false
			    }
			});


			function randomChart(chart) {
				
				console.log(chart.data.datasets[0].data)
				for (var i = 0; i < chart.data.datasets[0].data.length ; i++) {
					chart.data.datasets[0].data[i] = randomValue();
				}
				chart.update();
			}


			document.getElementById("pieChart").addEventListener("click", function () { randomChart(chart)}, false);
			document.getElementById("doughnutChart").addEventListener("click", function () { randomChart(chart2)}, false);

				