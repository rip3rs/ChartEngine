const Metrics = {
    hours:{
        yAxis: function(){
            let date = new Date(null);
            date.setMilliseconds(this.value);
            return ('0' + date.getHours()).slice(-2) +
                    ':' + ('0' + date.getMinutes()).slice(-2) +
                    ':' + ('0' + date.getSeconds()).slice(-2);
        },
        tooltip: function(){
            let date = new Date(null);
            date.setMilliseconds(this.y);
            return ('0' + date.getHours()).slice(-2) +
                    ':' + ('0' + date.getMinutes()).slice(-2) +
                    ':' + ('0' + date.getSeconds()).slice(-2);
        },
    }
};

module.exports = Metrics;