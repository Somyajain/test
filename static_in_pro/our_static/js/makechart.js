function myfunc2(mydata,coinname)
{
    dates=[];
    marketcap=[];
    var abc=Object.keys(mydata.data).length;

    for(j=0;j<abc;j+=10)
    {

        dates.push("Date: "+mydata.data[j].date);

        marketcap.push(Math.round(mydata.data[j].marketCap * 100) / 100);

    }








    const chart=document.getElementById("lineChart");

    var myLineChart = new Chart(chart, {
        type: 'line',
        data: {
            labels: dates,
            datasets:[
                {
                    label: "Market Cap",
                    data: marketcap,
                    backgroundColor: "blue",
                    fill: false,
                    borderColor: "lightblue",
                    lineTension: 0,
                    pointRadius: 5,
                    pointBackgroundColor: "black",
                    pointStyle: "rect",
                    pointHitRadius: 40,
                    pointHoverBackgroundColor: "RED" ,
                }
            ]


        },
        options: {
            title:{
                display:true,
                position: "top",
                text: "MARKET CAP HISTORY",
                fontSize:10,
                fontColor: "#333"

            },
            legend:{
                display: "true",
                position: "bottom"
            }
        }
    });

























}


function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        {

            xhr.open(method, url, true);
            xhr.setRequestHeader("Key", "ad644c2b6473b8dd5bfc6e6ff85e0774");
            xhr.setRequestHeader("Secret", "9fc82918ad4cb0348333c6261fabe594");


        }
    } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Key", "ad644c2b6473b8dd5bfc6e6ff85e0774");
        xhr.setRequestHeader("Secret", "9fc82918ad4cb0348333c6261fabe594");

    } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

    }
    return xhr;
}

function makeCorsRequest() {
    // This is a sample server that supports CORS.
    var loc = window.location.pathname;
    function getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }
    var thepos=getPosition(loc,"/",2);

    var dir = loc.substring(thepos+1, loc.length-1);
    dir=decodeURIComponent(dir);
    var dictionary1= new Object();
    dictionary1={
        "Bitcoin" : 363,
        "Ethereum":364,
        "Ripple":365,
        "Litecoin":366,
        "Stellar":373,
        "Bitcoin Cash":2233,
        "NEO":2463,
        "Cardano":2796,
        "EOS":2391


    };
    console.log(dir);
    console.log(dictionary1[dir]);

    var url = 'https://www.cryptocurrencychart.com/api/coin/history/'+dictionary1[dir]+'/2017-05-23/2018-03-03/marketCap/USD';
    var xhr = createCORSRequest('GET',url);
    console.log(url);
    console.log(xhr);
    if (!xhr) {
        console.log('CORS not supported');
        return ('GODDAMNIT');
    }

    // Response handlers.
    xhr.setRequestHeader("Access-Control-Allow-Origin", "https://api.coinmarketcap.com/v1/ticker/");
    xhr.setRequestHeader("Key", "ad644c2b6473b8dd5bfc6e6ff85e0774");
    xhr.setRequestHeader("Secret", "9fc82918ad4cb0348333c6261fabe594");
    xhr.onload = function() {

        var text = xhr.responseText;
        var mydata=JSON.parse(text);

        console.log('going in');




        console.log(mydata);
        myfunc2(mydata,dir);
        console.log(mydata.data[0].marketCap);

    };
    xhr.onerror = function() {
        console.log('Woops, there was an error making the request.');
    };
    xhr.setRequestHeader("Key", "ad644c2b6473b8dd5bfc6e6ff85e0774");
    xhr.setRequestHeader("Secret", "9fc82918ad4cb0348333c6261fabe594");
    xhr.send();

}


makeCorsRequest();
