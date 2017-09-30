const ChartEngine = require('./App');
const Highcharts = require('highcharts');
const materialStyle = require('./styles/material');

//Metrics
const Metrics = require('./services/metrics');

//Filters
const DateFilters = require('./services/filters/dates');
const FieldFilters = require('./services/filters/fields');
let exportCharts = false;

module.exports = class CoreChart{
    constructor(endpoint, params, type){
        this.endpoint = endpoint;
        this.method = params.method ? params.method : 'get';
        if ( params.method )
            delete params.method;
        this.params = params;
        this.type = type;
        //this.setHttpHeaders();
        this.checkFilters();
        this.setDefaultParams();
        this.setMetrics();
        this.setExport();
    }

    setHttpHeaders(){
        this.httpHeaders = this.prams.httpHeaders ? this.params.httpHeaders : {};
    }

    setExport(){
        if(exportCharts === false){
            require('highcharts-exporting')(Highcharts);
            require('highcharts-export-csv')(Highcharts);
            exportCharts = true;
        }
    }

    checkFilters(){
        if(this.params.filters === undefined)
            this.params.filters = {};

        this.dateFilters = new DateFilters(this.params.filters.dateFilters);
        this.fieldFilters = new FieldFilters(this.params.filters.fields);
    }

    setStyle(){
        let head = document.querySelector('head');
        let materialStyleElement = document.querySelector('#materialDesignStyle');
        let fieldsStyleElement = document.querySelector('#fieldsStyle');
        let datesStyleElement = document.querySelector('#dateFiltersStyle');
        head.innerHTML += materialStyleElement == null ? `<style id="materialDesignStyle" >${materialStyle}</style>` : '';
        head.innerHTML += datesStyleElement == null ? this.dateFilters.getStyle() : '';
        head.innerHTML += fieldsStyleElement == null ? this.fieldFilters.getStyle() : '';
        head.innerHTML += '<style>.chart-engine{display: flex;flex-direction: column;justify-content: center;}</style>';
    }

    buildController(name, args){
        ChartEngine.controller(name, args);
        this.render(name);
    }

    getDomElements(){
        let dom = '';
        dom += `<div id="${this.params.elApp}Chart" ng-init="render()"></div>`;
        dom += this.dateFilters.render();
        dom += this.fieldFilters.render();
        return dom;
    }

    render(name){
        let app = document.querySelector('#' + this.params.elApp);
        app.classList.add('chart-engine');
        app.innerHTML = this.getDomElements();
        app.setAttribute('ng-controller', name);
        angular.bootstrap(app, ['chartEngine']);
        this.setStyle();
    }

    setDefaultParams(){
        this.defaultParams = {
            credits:{
                enabled: false
            },
             title: {
                text: this.params.title ? this.params.title : ''
            },

            subtitle: {
                text: this.params.subtitle ? this.params.subtitle : ''
            },

            xAxis:{
                categories: []
            },

            yAxis: {
                title: {
                    text: this.params.ytitle ? this.params.ytitle : ''
                },
                labels: {}
            },
            
            tooltip:{

            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            plotOptions: {
                dataLabels: {
                    enabled: true
                }
            },
        };
    }

    setMetrics(){
        if(this.params.metric){
            this.defaultParams.yAxis.labels.formatter = Metrics[this.params.metric].yAxis;
            this.defaultParams.tooltip.formatter = Metrics[this.params.metric].tooltip;
        }
    }

    buildChart(elApp, series, type, defaultParams){
        defaultParams.chart = {type: type};
        defaultParams.series = series;
        Highcharts.chart(elApp + 'Chart', defaultParams);
    }

    getResult(formatData, result){
        let finalData = result.data.series;
        if(formatData != undefined)
            finalData = formatData(result.data.series);

        return finalData;
    }

    getDefaultParams(defaultParams, result){
        if(result.data.labels != undefined)
            defaultParams.xAxis.categories = result.data.labels;

        return defaultParams;
    }

    getController(){
        let self = this;
        return ($scope, $http)=>{
            
            $scope = self.fieldFilters.getVariables($scope);

            $scope.dataToSend = {};
            $scope.dataToSend = self.dateFilters.getParams($scope.dataToSend);
            $scope.dataToSend = self.fieldFilters.getParams($scope.dataToSend);
            
            $scope.getParams = () => {
               let params = {};

               for(let key in $scope.dataToSend){
                   if($scope.dataToSend[key] != undefined && $scope.dataToSend[key] != null){
                       params[key] = $scope.dataToSend[key];
                   }
               }
               
               return params;
            };

            $scope.render = ()=>{
                $http({
                    url: self.endpoint,
                    method: self.method ? self.method : 'get',
                    headers: self.httpHeaders,
                    data: $scope.getParams()
                }).then((result) => {
                    self.buildChart(self.params.elApp, self.getResult(self.formatData, result), self.type, self.getDefaultParams(self.defaultParams, result));
                });
            }
        }
    }

}