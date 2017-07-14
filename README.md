# Installation

```shell
npm install chartengine --save
```

# Available Charts

| Chart | Example |
|---|---|
| Line  | ``` const LineChart = require('chartengine/linechart'); ``` |
| Bars  | ``` const BarsChart = require('chartengine/barchart'); ``` |
| Column  | ``` const ColumnChart = require('chartengine/columnchart'); ``` |
| Pie  | ``` const PieChart = require('chartengine/piechart'); ``` |

#Mandatory Fields
| Field | Type | Example |
|---|---|---|
| Endpoint  | String  | http://someapiurl/endpoint |
| **Params** | Object | {elApp: 'myAppGraph'} |

#Params Object
| Field | Type | Required | Example |
|---|---|---|---|
| elApp | String | YES | 'myAppGraph' |
| **filters** | object | NO | {} |


#Filters Object
| Field | Type  | Example |
|---|---|---|
| **dateFilters** | Object | {} |
| **fields** | Object | {} |


# Examples

##Simple Line Chart

###HTML

```html
<div id="myAppGraph"></div>
```

###Javascript

```js
const LineChart = require('chartengine/LineChart');

new LineChart('http://api.url/endpoint', {
    elApp: 'myAppGraph'
});
```

###Backend Response

```json
    {
        "series": [
            {
                "name": "Installation",
                "data": [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, 
            {
                "name": "Manufacturing",
                "data": [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, 
            {
                "name": "Sales & Distribution",
                "data": [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, 
            {
                "name": "Project Development",
                "data": [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, 
            {
                "name": "Other",
                "data": [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }
        ]
    }
    
```

##Filters

###Dates

```js
const LineChart = require('chartengine/LineChart');

new LineChart('http://api.url/endpoint', {
    elApp: 'myAppGraph', 
    filters: {
      dateFilters: {
        someDateVar: new Date(), //date object (or string: '2017-06-20')
        someDateVar2: new Date() //date object (or string: '2017-06-20')
      }
    }
});
```

###Fields
```js
new LineChart('http://api.url/endpoint', {
    elApp: 'myAppGraph', 
    filters: {
        dateFilters: {
            dateFilters: {
                someDateVar: new Date(), //date object (or string: '2017-06-20')
                someDateVar2: new Date() //date object (or string: '2017-06-20')
            }
        },
        fields: {
            myDummyField: {
                multiple: false, //activate multiselection (is true by default)  [NOT MANDATORY]
                defaultValue: 2, //default value of filter (if is multiple is an array of values) [NOT MANDATORY]
                data:[
                    {key: 1, value: 'Dummy 1'},
                    {key: 2, value: 'Dummy 2'},
                    {key: 3, value: 'Dummy 3'},
                    {key: 4, value: 'Dummy 4'},
                ]
            }
        }
    }
});
```

## Documentation

**TBA**