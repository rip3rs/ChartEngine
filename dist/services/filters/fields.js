'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}module.exports=function(){function Fields(fields){_classCallCheck(this,Fields);this.fields=fields}_createClass(Fields,[{key:'getStyle',value:function getStyle(){var style='<style id="fieldsStyle">';style+=' .md-select-value .md-select-icon:after{content: "\\25BC"} ';style+=' .chart-engine-filters{margin-left: 8px; display:inline-block;} ';style+='</style>';return style}},{key:'getVariables',value:function getVariables($scope){if(this.fields!=undefined){for(var key in this.fields){$scope[key]=this.fields[key].data};}return $scope}},{key:'getParams',value:function getParams(dataToSend){if(this.fields!=undefined){for(var key in this.fields){dataToSend[key]=this.fields[key].defaultValue?this.fields[key].defaultValue:null};}return dataToSend}},{key:'getElement',value:function getElement(el,key){var multiple=el.multiple?'multiple':'';var alias=el.alias?el.alias:key;var dropdown='<md-input-container style="min-width: 150px;max-width: 100%;"><label>'+alias+'</label><md-select aria-label="'+key+'" ng-change="render()" ng-model="dataToSend.'+key+'" '+multiple+'><md-optgroup label="'+alias+'"><md-option ng-value="item.key" ng-repeat="item in '+key+'">{[{item.value}]}</md-option></md-optgroup></md-select></md-input-container>';return dropdown}},{key:'getDomElement',value:function getDomElement(model){var fieldElements='';for(var key in this.fields){fieldElements+=this.getElement(this.fields[key],key)}return'<div class="chart-engine-filters">'+fieldElements+'</div>'}},{key:'render',value:function render(){return this.fields===undefined?'':this.getDomElement()}}]);return Fields}();
//# sourceMappingURL=fields.js.map
