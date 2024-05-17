google.charts.load('current', { packages: ['corechart'] });
// google.charts.setOnLoadCallback(drawChartCuaf);
google.charts.setOnLoadCallback(drawChartLineHorz);
google.charts.setOnLoadCallback(drawChartScatter);


function drawChartLineHorz() {
    const data = google.visualization.arrayToDataTable([
        ['Class', 'Mhl'],
        ['A', 55],
        ['B', 49],
        ['C', 44],
        ['A+', 24],
        ['B+', 15]
    ]);
    const options = {
        title: 'Student Class Types',
        colors: ['#774dd3', '#8048f9', '#5b0fff', '#8b61e7', '#ac98d9'],
        is3D: true,
    };
    const chart = new google.visualization.BarChart(document.getElementById('myChart6'));
    chart.draw(data, options);
}
function drawChartScatter() {
    // Set Data
    const data = google.visualization.arrayToDataTable([
        ['2023', '2024'],
        [50, 7], [60, 8], [70, 8], [80, 9], [90, 9], [100, 9],
        [110, 10], [120, 11], [130, 14], [140, 14], [150, 15]
    ]);
    // Set Options
    const options = {
        title: 'Student Class vs Count',
        hAxis: { title: 'Square Meters' },
        vAxis: { title: 'Count in Millions' },
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        is3D: true
    };
    // Draw Chart
    const chart = new google.visualization.ScatterChart(document.getElementById('myChart7'));
    chart.draw(data, options);
}