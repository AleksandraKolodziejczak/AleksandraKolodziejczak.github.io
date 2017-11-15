$(document).ready(function () {


    $("button").click(pobierzDane);


    function pobierzDane(options) {
        $.getJSON("https://blockchain.info/pl/ticker", function (data) {
            console.log(data.PLN.sell);

            document.getElementById('buy').innerHTML = "buy: " + data.PLN.buy;
            document.getElementById('sell').innerHTML = "sell: " + data.PLN.sell;



            if (data.PLN.sell > data.PLN.last) {


                ($('#sell').append("<i class='fa fa-arrow-up' aria-hidden='true'></i>"));
            } else if (data.PLN.sell == data.PLN.last) {
                ($('#sell').append("<i class='fa fa-arrows-h' aria-hidden='true'></i>"));
            } else {
                ($('#sell').append("<i class='fa fa-arrow-down' aria-hidden='true'></i>"));
            }



            if (data.PLN.buy > data.PLN.last) {


                ($('#buy').append("<i class='fa fa-arrow-up' aria-hidden='true'></i>"));
            } else if (data.PLN.buy == data.PLN.last) {
                ($('#buy').append("<i class='fa fa-arrows-h' aria-hidden='true'></i>"));
            } else {
                ($('#buy').append("<i class='fa fa-arrow-down' aria-hidden='true'></i>"));
            }

        });

    }
});