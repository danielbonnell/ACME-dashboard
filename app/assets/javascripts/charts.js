$(function () {
    $('#community').highcharts({
        chart: {
            // Edit chart spacing
            spacingBottom: 15,
            spacingTop: 10,
            spacingLeft: 10,
            spacingRight: 10,

            // Explicitly tell the width and height of a chart
            width: null,
            height: 300
        },
        xAxis: {
            categories: ['2/14', '2/15', '2/16', '2/17', '2/18', '2/19', '2/20']
        },
        yAxis: {
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            ceiling: 10,
            floor: 0
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Legend Red',
            data: [7.0, 6.9, 9.5, 8.5, 6.2, 8.5, 4.2]
        }, {
            name: 'Legend Blue',
            data: [0.2, 0.8, 5.7, 7.3, 4.0, 2.0, 1.8]
        }, {
            name: 'Legend Green',
            data: [0.9, 0.6, 3.5, 3.4, 4.5, 6.0, 5.6]
        }]
    });
});

$(function() {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            // Edit chart spacing
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,

            // Explicitly tell the width and height of a chart
            width: null,
            height: 250,
            renderTo: 'results1',
            type: 'pie'
        },
        title: {
            text: 'This week my teacher let me know that I did a good job.'
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        plotOptions: {
            pie: {
                shadow: false
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Browsers',
            data: [["Strongly Agree",15],["Somewhat Agrree",32],["Somewhat Disagree",18],["Strongly Disagree",35]],
            size: '60%',
            innerSize: '50%',
            showInLegend:true,
            dataLabels: {
                enabled: false
            }
        }]
    });
});

$(function() {
    // Create the chart
    chart = new Highcharts.Chart({
        chart: {
            // Edit chart spacing
            spacingBottom: 0,
            spacingTop: 0,
            spacingLeft: 0,
            spacingRight: 0,

            // Explicitly tell the width and height of a chart
            width: null,
            height: 250,
            renderTo: 'results2',
            type: 'pie'
        },
        title: {
            text: 'Our school administrators looked out for our needs this week.'
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        plotOptions: {
            pie: {
                shadow: false
            }
        },
        tooltip: {
            formatter: function() {
                return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Browsers',
            data: [["Strongly Agree",48],["Somewhat Agrree",27],["Somewhat Disagree",21],["Strongly Disagree",4]],
            size: '60%',
            innerSize: '50%',
            showInLegend:true,
            dataLabels: {
                enabled: false
            }
        }]
    });
});
