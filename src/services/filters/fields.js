module.exports = class Fields{
    constructor(fields){
        this.fields = fields;
    }

    getStyle(){
        let style = '<style id="fieldsStyle">';
            style += ' .md-select-value .md-select-icon:after{content: "\\25BC"} ';
            style += ' .chart-engine-filters{margin-left: 8px; display:inline-block;} ';
            style += '</style>';

        return style;
    }

    getVariables($scope){
        if(this.fields != undefined){
            for(let key in this.fields){
                $scope[key] = this.fields[key].data;
            };
        }

        return $scope;
    }

    getParams(dataToSend){
        if(this.fields != undefined){
            for(let key in this.fields){
                dataToSend[key] = this.fields[key].defaultValue ? this.fields[key].defaultValue : null;
            };
        }
        
        return dataToSend;
    }

    getElement(el, key){
        let multiple = el.multiple ? 'multiple' : '';
        let alias = el.alias ? el.alias : key;
        let isHidden = el.hidden;
        
        let dropdown = `<md-input-container style="min-width: 150px;max-width: 100%;${isHidden ? 'display:none;': ''}"><label>${alias}</label><md-select aria-label="${key}" ng-change="render()" ng-model="dataToSend.${key}" ${multiple}><md-optgroup label="${alias}"><md-option ng-value="item.key" ng-repeat="item in ${key}">{[{item.value}]}</md-option></md-optgroup></md-select></md-input-container>`;

        return dropdown;
    }

    getDomElement(model){
        let fieldElements = '';
        for(let key in this.fields){
            fieldElements += this.getElement(this.fields[key], key);
        }

        return '<div class="chart-engine-filters">' + fieldElements + '</div>';
    }

    render(){
        return this.fields === undefined ? '' : this.getDomElement();
    }
}
