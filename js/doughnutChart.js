//データラベルプラグイン
Chart.plugins.unregister(ChartDataLabels);

//ドーナツグラフ
let members = 50;
let visitor = 50;

var dctx = document.getElementById('doughnutChart').getContext('2d');
dctx.canvas.height = 320;

var doughnutChart = new Chart(dctx, {
    type: 'doughnut',
    data: {
        labels: ['メンバー', 'ビジター'],
        datasets: [{
            data: [members, visitor],
            backgroundColor: [
                "#87cefa",
                "#f0f8ff"
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        cutoutPercentage: 80,
        title: {
            display: true,
            text: 'サポート割合',
            position: 'bottom'
        },
        tooltips: {
            enabled: false
        },
        animation: false
    }
});


// 横棒グラフ

var hctx = document.getElementById('horizontalBarChart').getContext('2d');
hctx.canvas.height = 80;

let targetValue = 800000;

var horizontalBarChart = new Chart(hctx, {
    type: 'horizontalBar',
    data: {
        datasets: [{
            data: [members],
            backgroundColor: [
                "#87cefa",
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        barPercentage: 0.7,
        categoryPercentage: 0.7,
        maxBarThicknes: 40,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{ display: false }],
            xAxes: [{ display: false }]
        },
        tooltips: {
            enabled: false
        },
        animation: false,
        plugins: {
            datalabels: {
                color: 'blue',
                labels: {
                    title: {
                        font: {
                            weight: 'bold'
                        }
                    },
                    value: {
                        color: 'green'
                    }
                }
            }
        }
    }
});

