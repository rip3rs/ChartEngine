const CoreChart = require('./CoreChart');

const controller = ($scope)=>{
    $scope.render
};

module.exports = class PieChart extends CoreChart{
    constructor(endpoint, params){
        super(endpoint, params, 'pie');
        this.setExtraParams();
        this.setController();
    }

    setController(){
        this.buildController('piechart', ['$scope', '$http', this.getController()]);
    }

    formatData(series){
        let finalData = [];
        if(!series)
            series = [];
        
        series.forEach(function(serie) {
            let sum = 0;

            serie.data.forEach(function(value) {
                sum += value;
            });

            finalData.push({name: serie.name, y: sum});
        });
        
        return [{data:finalData}];
    }

    setExtraParams(){
        this.defaultParams.tooltip = {
            pointFormat: this.params.tooltipUsePercentage ? '<b>{series.name}</b>: {point.percentage:.1f}%' : '<b>{series.name}</b>: <b>{point.y}</b>'
        };

        this.defaultParams.plotOptions = {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: this.params.labelUsePercentage === false ? '<b>{point.name}</b>: {point.y}' : '<b>{point.name}</b>: {point.percentage:.1f}%',
                    connectorColor: 'silver'
                }
            }
        }
    }

    
}