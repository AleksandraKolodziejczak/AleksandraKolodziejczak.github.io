$(document).ready(function () {


    $("button").click(pobierzDane);


    function pobierzDane(options) {
        $.getJSON("https://blockchain.info/pl/ticker", function (data) {
            console.log(data.PLN.sell);

            var ostatniaSprzedaz = $('#sell').html();
            var ostatnieKupno = $('#buy').html();
            var sprzedaz = data.PLN.sell;
            var kupno = data.PLN.buy;
            $('#sell').html(data.PLN.sell);
            $('#buy').html(data.PLN.buy);




            if (sprzedaz > ostatniaSprzedaz) {


                ($('#sell-arrow').html("<span><i class='fa fa-arrow-up' aria-hidden='true'></i></span>"));
            } else if (data.PLN.sell == sprzedaz) {
                ($('#sell-arrow').html("<span><i class='fa fa-arrows-h' aria-hidden='true'></i></span>"));
            } else {
                ($('#sell-arrow').html("<span><i class='fa fa-arrow-down' aria-hidden='true'></i></span>"));
            }



            if (kupno > ostatnieKupno) {


                ($('#buy-arrow').html("<span><i class='fa fa-arrow-up' aria-hidden='true'></i></span>"));
            } else if (data.PLN.buy == kupno) {
                ($('#buy-arrow').html("<span><i class='fa fa-arrows-h' aria-hidden='true'></i></span>"));
            } else {
                ($('#buy-arrow').html("<span><i class='fa fa-arrow-down' aria-hidden='true'></i></span>"));
            }

        });

    }
});