const CoreChart = require('./CoreChart');

const controller = ($scope)=>{
    $scope.render
};

module.exports = class LineChart extends CoreChart{
    constructor(endpoint, params){
        super(endpoint, params, 'line');
        this.setController();
    }

    setController(){
        this.buildController('linechart', ['$scope', '$http', this.getController()]);
    }

}