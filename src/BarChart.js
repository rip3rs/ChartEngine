const CoreChart = require('./CoreChart');

const controller = ($scope)=>{
    $scope.render
};

module.exports = class BarChart extends CoreChart{
    constructor(endpoint, params){
        super(endpoint, params, 'bar');
        this.setController();
    }

    setController(){
        this.buildController('barchart', ['$scope', '$http', this.getController()]);
    }
    
}