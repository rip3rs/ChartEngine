const CoreChart = require('./CoreChart');

const controller = ($scope)=>{
    $scope.render
};

module.exports = class ColumnChart extends CoreChart{
    constructor(endpoint, params){
        super(endpoint, params, 'column');
        this.setController();
    }

    setController(){
        this.buildController('columnchart', ['$scope', '$http', this.getController()]);
    }
    
}