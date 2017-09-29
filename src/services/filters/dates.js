const ChartEngine = require('../../App');
const moment = require('moment');

module.exports = class DateFilters{
    constructor(dateFilters){
        this.dateFilters = dateFilters;
    }

    getStyle(){
        return '<style id="dateFiltersStyle"> .chart-engine-date-filters{ display: flex; flex-direction: row; justify-content: flex-start; align-items: center;} </style>';
    }

    getParams(dataToSend){
        for(let id in this.dateFilters){
            dataToSend[id] = this.dateFilters[id];
        }
        
        return dataToSend;
    }

    getElement(el, key){
        return `<md-datepicker ng-change="render()" ng-model="dataToSend.${key}" md-placeholder="Enter date"></md-datepicker>`;
    }

    getDomElement(model){
        let dateElements = '';
        for(let key in this.dateFilters){
                dateElements += this.getElement(this.dateFilters[key], key);
        }

        return '<div class="chart-engine-date-filters">' + dateElements + '</div>';
    }

    render(){
        return this.dateFilters === undefined ? '' : this.getDomElement();
    }

}