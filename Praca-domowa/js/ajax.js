$(document).ready(function () {
    $("button").click(pobierzDane);

    function pobierzDane(options) {
        $.getJSON("https://blockchain.info/pl/ticker", function (data) {
            console.log(data.PLN.sell);

            document.getElementById('sell').innerHTML = "sell: " + data.PLN.sell;
            document.getElementById('last').innerHTML = "last: " + data.PLN.last;


            if (data.PLN.sell > data.PLN.last) {
                ($('#result').html("<i class='fa fa-arrow-up' aria-hidden='true'></i>"));
            } else if (data.PLN.sell == data.PLN.last) {
                ($('#result').html("<i class='fa fa-arrows-h' aria-hidden='true'></i>"));
            } else {
                ($('#result').html("<i class='fa fa-arrow-down' aria-hidden='true'></i>"));
            }

        });
    }
});