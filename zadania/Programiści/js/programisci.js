'use strict';

$(document).ready(function () {
    
    $('button').after("<div id='dane-programisty'></div>");
    
    $("button").click(function() {
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php", function (data) {
           console.log(data);
       document.getElementById('dane-programisty').innerHTML = "imie: " + data.imie + ", " + "nazwisko: " + data.nazwisko + ", " + "zawód: " + data.zawod + ", " + "firma: " + data.firma;
       });
    });   
});