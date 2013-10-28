$(function () {
        $('.chart').highcharts({
            animation: false,
            title: {
                text: ''
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
                    plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function() {
                            $.scrollTo($(this.options.url), 'swing')
                        }
                    }
                }
            }
        },
            
            tooltip: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                data:[
                    {name: 'The Angels Game', y:2, url: '#AngelsGame'},
                    {name: 'Dont Make Me Think, Brave New World',y:2, url: '#DontMakeMeThink'},
                    {name: 'Lateral Thinking',y:1, url: '#LateralThinking'},
                     ]}]
        });
    });

//We are using saving the id of the element in this json, to make the scroll
    
