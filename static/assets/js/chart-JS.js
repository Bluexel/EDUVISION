// ==============333333333333333======================================
var ctx2 = document.getElementById("chart-line").getContext("2d");
var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);
gradientStroke1.addColorStop(1, 'rgba(45,168,255,0.2)');
gradientStroke1.addColorStop(0.2, 'rgba(45,168,255,0.0)');
gradientStroke1.addColorStop(0, 'rgba(45,168,255,0)'); //blue colors
var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);
gradientStroke2.addColorStop(1, 'rgba(119,77,211,0.4)');
gradientStroke2.addColorStop(0.7, 'rgba(119,77,211,0.1)');
gradientStroke2.addColorStop(0, 'rgba(119,77,211,0)'); //purple colors


function getData(q, todo) {

    fetchData(q).then(res => {
        if (res) {
            todo(res);
        } else {
            Swal.fire({
                title: 'Empty',
                text: "We couldn't find what you're looking for, try another filter.",
                icon: 'error', // Can be 'warning', 'error', 'success', 'info', or 'question'
                confirmButtonText: 'Done', //
            });
        }
    });
}

async function fetchData(filter) {

    try {
        const response = await fetch("../api?year=" + filter);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error appropriately, e.g., display an error message to the user
        return null; // Or any default value you prefer
    }
}


document.addEventListener('DOMContentLoaded', () => {
    let courseName = document.getElementById("CourseName").innerText;
    if (courseName !== "default course data") {
        getData(`${document.getElementById('year').value}&semester=${document.getElementById('semester').value}&name=${courseName.trim()}`, showData);

    }

});


document.querySelectorAll('select').forEach(ele => {
    ele.addEventListener("change", (e) => {
        let courseName = document.getElementById("CourseName").innerText;
        if (courseName !== "default course data") {
            getData(`${document.getElementById('year').value}&semester=${document.getElementById('semester').value}&name=${courseName.trim()}`, showData);

        } else {
            Swal.fire({
                title: 'success',
                text: courseName,
                icon: 'success', // Can be 'warning', 'error', 'success', 'info', or 'question'
                confirmButtonText: 'Done'
            });
        }
    });
});


function showData(response) {
    console.log(response.assessment);

    // ==============11111111=====================================
    function getDataSet1(x) {
        let data = [];

        for (let index in response.assessment) {

            data.push(response.assessment[index].lo[x] *100);

        }
        return data;
    }

    var ctx = document.getElementById("chart-bars").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5"],
            datasets: [{
                label: 'Assigment',
                data: getDataSet1(0),
                tension: 0.4,
                borderWidth: 0,
                borderSkipped: true,
                maxBarThickness: 6,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(98,4,237,0.86)',
                hoverBorderColor: 'rgba(159,93,248,0.84)'
            }, {
                label: 'Midterm',
                data: getDataSet1(1),
                tension: 0.4,
                borderWidth: 0,
                borderSkipped: true,
                maxBarThickness: 6,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)'
            }, {
                label: 'FinalExam',
                data: getDataSet1(2),
                tension: 0.4,
                borderWidth: 0,
                borderSkipped: true,
                maxBarThickness: 6,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(255,206,44,0.87)',
                hoverBorderColor: 'rgba(241,215,127,0.81)'
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    });


    // ==============2222222222222======================================
    let data = {
        labels: ['A+', 'A',
            'B+', 'B',
            'C+', 'C', 'D+', 'D', 'F'],
        datasets: [
            {
                label: response.Instructor,
                data: response.data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)'
            },],
    };
    let options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };
    let ctx3 = document.getElementById('myStyledBarChart').getContext('2d');

    let myStyledBarChart = new Chart(ctx3, {
        type: 'bar',
        data: data,
        options: options
    });

    /////////////////////////////
    // ==============5555555555======================================
// setup


    const data4 = {
        labels: (response.assessment.filter((obj) => obj.name)).map((obj) => obj.name),
        datasets: [{
            label: 'CIS424',
            data: (response.assessment.filter((obj) => obj.rate)).map((obj) => obj.rate * 100),
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        },

        ]
    };

    // config
    const config4 = {
        type: 'radar',
        data: data4,
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                y: { // defining min and max so hiding the dataset does not change scale range
                    min: 0,
                    max: 100
                }
            }
        },
    };
// render init block
    const myChart4 = new Chart(
        document.getElementById('myChart4'),
        config4
    );


    // ==============44444444444444======================================
    console.log(response.assessment[2].performanc);

    function getDataSet2() {
        let data = [];
        let color = ["#92ff2c", '#2ca8ff', "#ffce2c", '#6204ed', '#ff2cdc'];
        for (let index in response.assessment) {

            data.push({
                label: response.assessment[index].name,
                tension: 0,
                borderWidth: 2,
                pointRadius: 3,
                borderColor: color[index],
                pointBorderColor: color[index],
                pointBackgroundColor: color[index],
                backgroundColor: gradientStroke1,
                fill: true,
                data: response.assessment[index].performanc,
                maxBarThickness: 6
            });

        }
        return data;
    }

    new Chart(ctx2, {
        plugins: [{
            beforeInit(chart) {
                const originalFit = chart.legend.fit;
                chart.legend.fit = function fit() {
                    originalFit.bind(chart.legend)();
                    this.height += 40;
                }
            },
        }],
        type: "line",
        data: {
            labels: ["A+", "A", "B+", "B", "C+", "C", "D+", "D", "F",],
            datasets: getDataSet2(),
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'easeInQuad',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'end',
                    labels: {
                        boxWidth: 6,
                        boxHeight: 6,
                        padding: 20,
                        pointStyle: 'circle',
                        borderRadius: 50,
                        usePointStyle: true,
                        font: {
                            weight: 400,
                        },
                    },
                },
                tooltip: {
                    backgroundColor: '#fff',
                    titleColor: '#1e293b',
                    bodyColor: '#1e293b',
                    borderColor: '#e9ecef',
                    borderWidth: 1,
                    pointRadius: 2,
                    usePointStyle: true,
                    boxWidth: 8,
                }
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
            scales: {
                y: {
                    grid: {
                        drawBorder: false,
                        display: true,
                        drawOnChartArea: true,
                        drawTicks: false,
                        borderDash: [4, 4]
                    },
                    ticks: {
                        callback: function (value, index, ticks) {
                            return parseInt(value);
                        },
                        display: true,
                        padding: 10,
                        color: '#b2b9bf',
                        font: {
                            size: 12,
                            family: "Noto Sans",
                            style: 'normal',
                            lineHeight: 2
                        },
                        color: "#64748B"
                    }
                },
                x: {
                    grid: {
                        drawBorder: false,
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                        borderDash: [4, 4]
                    },
                    ticks: {
                        display: true,
                        color: '#b2b9bf',
                        padding: 20,
                        font: {
                            size: 12,
                            family: "Noto Sans",
                            style: 'normal',
                            lineHeight: 2
                        },
                        color: "#64748B"
                    }
                },
            },
        },
    });


    function getDataSet3() {
        let dataName = [];
        let dataRate = [];
        let data = [];
        for (let index in response.assessment) {
            console.log(response.assessment[index]);
            dataName.push(response.assessment[index].name);
            dataRate.push(response.assessment[index].rate * 100);

            /* data.push({
                 label: response.assessment[index].name,
                 data: response.assessment[index].rate,
                 backgroundColor: [
                     'rgba(255, 26, 104, 0.2)',
                     'rgba(54, 162, 235, 0.2)',
                     'rgba(255, 206, 86, 0.2)',
                     'rgba(75, 192, 192, 0.2)',
                     'rgba(153, 102, 255, 0.2)',
                     'rgba(255, 159, 64, 0.2)',
                     'rgba(0, 0, 0, 0.2)'
                 ],
                 borderColor: [
                     'rgba(255, 26, 104, 1)',
                     'rgba(54, 162, 235, 1)',
                     'rgba(255, 206, 86, 1)',
                     'rgba(75, 192, 192, 1)',
                     'rgba(153, 102, 255, 1)',
                     'rgba(255, 159, 64, 1)',
                     'rgba(0, 0, 0, 1)'
                 ],
                 borderWidth: 1
             });*/
        }

        return [{
            label: 'rate',
            data: dataRate,
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            borderWidth: 1
        }];
    }

// setup
    const data3 = {
        labels: (response.assessment.filter((obj) => obj.name)).map((obj) => obj.name),
        datasets: getDataSet3(),

    };
// config
    const config3 = {
        type: 'polarArea',
        data: data3,
        options: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
// render init block
    const myChart3 = new Chart(
        document.getElementById('myChart3'),
        config3
    );


    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawChartCuaf);

    function drawChartCuaf() {
        // Set Data
        const data = google.visualization.arrayToDataTable([
            ['Year', 'Rate'],
            [2024, 0], [2023, response.RateMarkers * 100]
        ]);
        // Set Options
        const options = {
            title: '',
            hAxis: {
                title: 'year',
                ticks: [2023, 2024]
            },
            // vAxis: { title: 'Price in Millions' },
            vAxis: {
                title: 'Rate Markers',

            },
            legend: 'false'
        };
        // Draw Chart
        const chart = new google.visualization.LineChart(document.getElementById('myChart5'));
        chart.draw(data, options);
    }

}