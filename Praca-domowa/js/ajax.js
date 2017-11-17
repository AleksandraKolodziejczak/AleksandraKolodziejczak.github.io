$(document).ready(function () {


    $("button").click(pobierzDane);


    function pobierzDane(options) {
        $.getJSON("https://blockchain.info/pl/ticker", function (data) {
            console.log(data.PLN.sell);


            var sprzedaz = document.getElementById('sell').innerHTML = "sell: " + data.PLN.sell;
            var kupno = document.getElementById('buy').innerHTML = "buy: " + data.PLN.buy;




            if (data.PLN.sell > sprzedaz) {


                ($('#sell').append("<i class='fa fa-arrow-up' aria-hidden='true'></i>"));
            } else if (data.PLN.sell == sprzedaz) {
                ($('#sell').append("<i class='fa fa-arrows-h' aria-hidden='true'></i>"));
            } else {
                ($('#sell').append("<i class='fa fa-arrow-down' aria-hidden='true'></i>"));
            }



            if (data.PLN.buy > kupno) {


                ($('#buy').append("<i class='fa fa-arrow-up' aria-hidden='true'></i>"));
            } else if (data.PLN.buy == kupno) {
                ($('#buy').append("<i class='fa fa-arrows-h' aria-hidden='true'></i>"));
            } else {
                ($('#buy').append("<i class='fa fa-arrow-down' aria-hidden='true'></i>"));
            }

        });

    }
});