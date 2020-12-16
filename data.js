/*!
 * Automatically generated data
 */
var dataRawWinKernelx64SchannelThroughput = [{t: new Date(1608157970119), y: 5931721}, {t: new Date(1608157970119), y: 6002229}, {t: new Date(1608157970119), y: 5899483}, {t: new Date(1608157970119), y: 5993378}, {t: new Date(1608157970119), y: 6003308}, {t: new Date(1608007891539), y: 5794313}, {t: new Date(1608007891539), y: 5970302}, {t: new Date(1608007891539), y: 5819172}, {t: new Date(1608007891539), y: 5919688}, {t: new Date(1608007891539), y: 5943982}, {t: new Date(1607837985749), y: 5814126}, {t: new Date(1607837985749), y: 5916610}, {t: new Date(1607837985749), y: 5887181}, {t: new Date(1607837985749), y: 5648660}, {t: new Date(1607837985749), y: 5822645}, {t: new Date(1607743293012), y: 5717315}, {t: new Date(1607743293012), y: 5896278}, {t: new Date(1607743293012), y: 5827529}, {t: new Date(1607743293012), y: 5870898}, {t: new Date(1607743293012), y: 5860973}, {t: new Date(1607422045873), y: 5776534}, {t: new Date(1607422045873), y: 5925138}, {t: new Date(1607422045873), y: 5929668}, {t: new Date(1607422045873), y: 5936081}, {t: new Date(1607422045873), y: 5666157}, {t: new Date(1607404689516), y: 5669297}, {t: new Date(1607404689516), y: 5656340}, {t: new Date(1607404689516), y: 5822094}, {t: new Date(1607404689516), y: 5625439}, {t: new Date(1607404689516), y: 5699919}, {t: new Date(1607401436361), y: 5942309}, {t: new Date(1607401436361), y: 5916330}, {t: new Date(1607401436361), y: 5584529}, {t: new Date(1607401436361), y: 5944463}, {t: new Date(1607401436361), y: 5688009}, {t: new Date(1607164035923), y: 5824461}, {t: new Date(1607164035923), y: 5618076}, {t: new Date(1607164035923), y: 5854451}, {t: new Date(1607164035923), y: 5514927}, {t: new Date(1607164035923), y: 5935371}, {t: new Date(1607066644434), y: 5870301}, {t: new Date(1607066644434), y: 5822096}, {t: new Date(1607066644434), y: 5793056}, {t: new Date(1607066644434), y: 5893437}, {t: new Date(1607066644434), y: 5928062}, {t: new Date(1607052457557), y: 5811147}, {t: new Date(1607052457557), y: 5852888}, {t: new Date(1607052457557), y: 5916956}, {t: new Date(1607052457557), y: 5416069}, {t: new Date(1607052457557), y: 5849815}, {t: new Date(1607046050933), y: 5897213}, {t: new Date(1607046050933), y: 5577100}, {t: new Date(1607046050933), y: 5735215}, {t: new Date(1607046050933), y: 5862504}, {t: new Date(1607046050933), y: 5949963}, {t: new Date(1606967237312), y: 5673730}, {t: new Date(1606967237312), y: 5862843}, {t: new Date(1606967237312), y: 5811575}, {t: new Date(1606967237312), y: 5993876}, {t: new Date(1606967237312), y: 5779373}]
var dataAverageWinKernelx64SchannelThroughput = [{t: new Date(1608157970119), y: 5966023.8}, {t: new Date(1608007891539), y: 5889491.4}, {t: new Date(1607837985749), y: 5817844.4}, {t: new Date(1607743293012), y: 5834598.6}, {t: new Date(1607422045873), y: 5846715.6}, {t: new Date(1607404689516), y: 5694617.8}, {t: new Date(1607401436361), y: 5815128}, {t: new Date(1607164035923), y: 5749457.2}, {t: new Date(1607066644434), y: 5861390.4}, {t: new Date(1607052457557), y: 5769375}, {t: new Date(1607046050933), y: 5804399}, {t: new Date(1606967237312), y: 5824279.4}]
var dataLabels = [new Date(1608156542207), new Date(1608007891539), new Date(1607840087270), new Date(1607837985749), new Date(1607743293012), new Date(1607422045873), new Date(1607404689516), new Date(1607401436361), new Date(1607395248667), new Date(1607164035923), new Date(1607066644434), new Date(1607052457557), new Date(1607046050933), new Date(1607042814554), new Date(1606977381806), new Date(1606967237312)]

var chartDataThroughput = {
    labels: dataLabels,
    datasets: [{
        type: "scatter",
        label: "Windows Kernel (raw)",
        backgroundColor: "rgb(0, 255, 0)",
        pointBorderColor: "rgb(0, 255, 0)",
        pointStyle: "crossRot",
        pointRadius: 5,
        pointBorderWidth: 2,
        data: dataRawWinKernelx64SchannelThroughput,
    }, {
        type: "line",
        label: "Windows Kernel (average)",
        backgroundColor: "rgb(0, 255, 0)",
        borderColor: "rgb(0, 255, 0)",
        tension: 0,
        data: dataAverageWinKernelx64SchannelThroughput,
        fill: false
    }]
};

var chartOptionsThroughput = {
    responsive: true,
    title: {
        display: true,
        text: 'Throughput'
    },
    tooltips: {
        mode: 'index',
        intersect: true
    },
    scales: {
        xAxes: [{
            type: 'time',
            time: {
                unit: 'day'
            },
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Date'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Throughput (kbps)'
            }
        }]
    }
};

var chartDataRPS = {
    labels: dataLabels,
    datasets: [{
        type: "scatter",
        label: "Windows Kernel (raw)",
        backgroundColor: "rgb(0, 255, 0)",
        pointBorderColor: "rgb(0, 255, 0)",
        pointStyle: "crossRot",
        pointRadius: 5,
        pointBorderWidth: 2,
        data: dataRawWinKernelx64SchannelThroughput,
    }, {
        type: "line",
        label: "Windows Kernel (average)",
        backgroundColor: "rgb(0, 255, 0)",
        borderColor: "rgb(0, 255, 0)",
        tension: 0,
        data: dataAverageWinKernelx64SchannelThroughput,
        fill: false
    }]
};

var chartOptionsRPS = {
    responsive: true,
    title: {
        display: true,
        text: 'RPS'
    },
    tooltips: {
        mode: 'index',
        intersect: true
    },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Date'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'RPS'
            }
        }]
    }
};

var chartDataHPS = {
    labels: dataLabels,
    datasets: [{
        type: "scatter",
        label: "Windows Kernel (raw)",
        backgroundColor: "rgb(0, 255, 0)",
        pointBorderColor: "rgb(0, 255, 0)",
        pointStyle: "crossRot",
        pointRadius: 5,
        pointBorderWidth: 2,
        data: dataRawWinKernelx64SchannelThroughput,
    }, {
        type: "line",
        label: "Windows Kernel (average)",
        backgroundColor: "rgb(0, 255, 0)",
        borderColor: "rgb(0, 255, 0)",
        tension: 0,
        data: dataAverageWinKernelx64SchannelThroughput,
        fill: false
    }]
};

var chartOptionsHPS = {
    responsive: true,
    title: {
        display: true,
        text: 'HPS'
    },
    tooltips: {
        mode: 'index',
        intersect: true
    },
    scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'Date'
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: 'HPS'
            }
        }]
    }
};