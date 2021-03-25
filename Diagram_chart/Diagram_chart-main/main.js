// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America", "Moon"],
        datasets: [
            {
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#F45C43"],
                data: [2478, 5267, 734, 784, 433, 100]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Predicted world population (millions) in 3020'
        }
    }
});



// Bar chart
new Chart(document.getElementById("Rain-chart"), {
    type: 'bar',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
            {
                label: "rain (mm)",
                data: [44, 34, 35, 30, 42, 60, 75, 74, 56, 60, 53, 47, 0]
            }
        ]
    },
    options: {
        legend: { display: true },
        title: {
            display: true,
            text: 'Rain Data '
        }
    }
});

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        datasets: [
            {
                label: "degweee (mm)",
                data: [1, 2, 1, 1, 2, 5, 2, 4, 1, 2, 3, 1,]
            }
        ]
    },
    options: {
        legend: { display: true },
        title: {
            display: true,
            text: 'kp points '
        }
    }
});