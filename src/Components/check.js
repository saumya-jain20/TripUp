var Address="Mumbai";

    console.log(Address);
    var lati = 0;
    var lngi = 0;
    if (Address == "Mumbai") {
        lati = 19.076;
        lngi = 72.877;
    }
    else if (Address == "Agra") {
        lati = 27.17;
        lngi = 78.00;
    }
    else if (Address == "Varanasi") {
        lati = 25.32;
        lngi = 82.98;
    }
    else if (Address == "Amritsar") {
        lati = 31.63;
        lngi = 74.87;
    }
    else if (Address == "Hyderabad") {
        lati = 17.38;
        lngi = 78.48;
    }
    else if (Address == "Banglore") {
        lati = 12.97;
        lngi = 77.580;
    }
    else if (Address == "Kolkata") {
        lati = 22.57;
        lngi = 88.36
    }
    else if (Address == "Delhi") {
        lati = 28.70;
        lngi = 77.10;
    }
    else if (Address == "Vizag") {
        lati = 17.68;
        lngi = 83.21;
    }
    else if (Address == "Kerala") {
        lati = 10.85;
        lngi = 76.27;
    }
    else if (Address == "Jaipur") {
        lati = 26.91;
        lngi = 75.78;
    }
    else if (Address == "Goa") {
        lati = 15.29;
        lngi = 74.12;
    }
    else if (Address == "Mysore") {
        lati = 12.29;
        lngi = 76.63;
    }
    else if (Address == "Ladak") {
        lati = 34.22;
        lngi = 77.56;
    }
    else if (Address == "Surat") {
        lati = 21.17;
        lngi = 72.83;
    }
    else if (Address == "Kullu Manali") {
        lati = 32.24;
        lngi = 77.18;
    }
    else if (Address == "Ooty") {
        lati = 11.41;
        lngi = 76.69;
    }
    else if (Address == "Maine") {
        lati = 45.25;
        lngi = 69.44;
    }

$.getJSON("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=" + lati + "&lon=" + lngi + "&units=metric&rapidapi-key=f995921e6cmshfe4f391a592f5c5p1e91aejsnd6e0fd163b67", function (res) {
 console.log(res);
        var icon1 = "https://www.weatherbit.io/static/img/icons/" + res.data[0].weather.icon + ".png";

        /*console.log(lati);
        console.log(lngi);
        console.log(icon1);
        console.log(Address);*/
        $('.icon1').attr('src', icon1);

        var ltemp1 = res.data[0].low_temp;
        var htemp1 = res.data[0].high_temp;
        var description1 = res.data[0].weather.description;

        $('.low_temp1').append(ltemp1);
        $('.high_temp1').append(htemp1);
        $('.weather1').append(description1);

        var icon2 = "https://www.weatherbit.io/static/img/icons/" + res.data[1].weather.icon + ".png";

        $('.icon2').attr('src', icon2);

        var ltemp2 = res.data[1].low_temp;
        var htemp2 = res.data[1].high_temp;
        var description2 = res.data[1].weather.description;

        $('.low_temp2').append(ltemp2);
        $('.high_temp2').append(htemp2);
        $('.weather2').append(description2);

        var icon3 = "https://www.weatherbit.io/static/img/icons/" + res.data[2].weather.icon + ".png";

        $('.icon3').attr('src', icon3);

        var ltemp3 = res.data[2].low_temp;
        var htemp3 = res.data[2].high_temp;
        var description3 = res.data[2].weather.description;

        $('.low_temp3').append(ltemp3);
        $('.high_temp3').append(htemp3);
        $('.weather3').append(description3);

        var icon4 = "https://www.weatherbit.io/static/img/icons/" + res.data[3].weather.icon + ".png";

        $('.icon4').attr('src', icon4);

        var ltemp4 = res.data[3].low_temp;
        var htemp4 = res.data[3].high_temp;
        var description4 = res.data[3].weather.description;

        $('.low_temp4').append(ltemp4);
        $('.high_temp4').append(htemp4);
        $('.weather4').append(description4);

        var icon5 = "https://www.weatherbit.io/static/img/icons/" + res.data[4].weather.icon + ".png";

        $('.icon5').attr('src', icon5);

        var ltemp5 = res.data[4].low_temp;
        var htemp5 = res.data[4].high_temp;
        var description5 = res.data[4].weather.description;

        $('.low_temp5').append(ltemp5);
        $('.high_temp5').append(htemp5);
        $('.weather5').append(description5);

}
)
