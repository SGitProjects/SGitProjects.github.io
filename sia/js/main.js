loadSia();
loadPeople();

   function loadSia() {
        var url="https://siamining.com/api/v1/addresses/8eedf801b332b9f0d75031ace83797d0594f4958dfc70b2111f8467587749f01a984a3d1d99d";
        $.getJSON(url, function(data) {
            $('#priceoverall').html(data.balance);
            $('#pricefifteenmin').html(data.intervals[1].rewards);
            $('#pricesixtymin').html(data.intervals[2].rewards);
            $('#pricesixhour').html(data.intervals[3].rewards);
            $('#priceoneday').html(data.intervals[4].rewards);
        });
        setInterval("loadSia()", 15000);
}

   function loadPeople() {
        var url="https://siamining.com/api/v1/addresses/8eedf801b332b9f0d75031ace83797d0594f4958dfc70b2111f8467587749f01a984a3d1d99d";
        $.getJSON(url, function(data) {
            $('.funkyworkers').html(data.workers[0].name);
            $('.larsonworkers').html(data.workers[2].name);
            $('.scopeworkers').html(data.workers[3].name);
            $('.suckerworkers').html(data.workers[4].name);
            $('.toxicworkers').html(data.workers[6].name);
        });
}