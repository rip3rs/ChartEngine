'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var CoreChart=require('./CoreChart');var controller=function controller($scope){$scope.render};module.exports=function(_CoreChart){_inherits(ColumnChart,_CoreChart);function ColumnChart(endpoint,params){_classCallCheck(this,ColumnChart);var _this=_possibleConstructorReturn(this,(ColumnChart.__proto__||Object.getPrototypeOf(ColumnChart)).call(this,endpoint,params,'column'));_this.setController();return _this}_createClass(ColumnChart,[{key:'setController',value:function setController(){this.buildController('columnchart',['$scope','$http',this.getController()])}}]);return ColumnChart}(CoreChart);
//# sourceMappingURL=ColumnChart.js.map
