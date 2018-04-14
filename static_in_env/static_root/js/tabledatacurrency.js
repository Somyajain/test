function update(value){
    value="["+value+"]";
    var jsonshit=JSON.parse(value);

    var loc = window.location.pathname;
    function getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }
    var thepos=getPosition(loc,"/",2);

    var dir = loc.substring(thepos+1, loc.length-1);

    dir=decodeURIComponent(dir);

    $(document).ready(function() {

        var coinindex = -1;
        for (i1 = 0; i1 < 50; i1++) {
            //console.log("json= "+jsonshit[0][i1].name);
            //console.log("dir= "+dir);
            if (jsonshit[0][i1].name == dir) {
                coinindex = i1;
                break;
            }
            else {
                //console.log("else hai bhai\n");
            }
        }






       $('#coinname').text(dir);

       $('#price').text(jsonshit[0][coinindex].price_usd+" $");
       $('#percent_change_1h').text(jsonshit[0][coinindex].percent_change_1h+" %");


       // $('#currencydata thead').remove();


        $.each([ 1,2,3,4,5,6,7,8 ], function( index, value ) {
            $('#currencydata tbody tr:nth-child(1)').remove();

        });
     //$('#currencydata tbody tr:nth-child(1)').remove();



        $('#currencydata > tbody:last-child').append('<tr id="'+coinindex+'"> <td>'  +jsonshit[0][coinindex].rank+'</td>   <td>' + jsonshit[0][coinindex].symbol + '</td> <td>' + jsonshit[0][coinindex].price_btc + '</td>        <td>'+jsonshit[0][coinindex].market_cap_usd+'</td>        <td>'+jsonshit[0][coinindex].total_supply+'</td>   <td>'+jsonshit[0][coinindex].percent_change_24h+'</td>  </tr>');



});

}
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();

  if ("withCredentials" in xhr) {

      // Check if the XMLHttpRequest object has a "withCredentials" property.
      // "withCredentials" only exists on XMLHTTPRequest2 objects.
      {
          xhr.open(method, url, true);


      }
  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}



function makeCorsRequest() {
  // This is a sample server that supports CORS.
    console.log("called tabledata");
  var url = 'https://api.coinmarketcap.com/v1/ticker/';

  var xhr = createCORSRequest('GET',url);
  if (!xhr) {
    console.log('CORS not supported');
    return ('GODDAMNIT');
  }

  // Response handlers.
  xhr.setRequestHeader("Access-Control-Allow-Origin", "https://api.coinmarketcap.com/v1/ticker/");

  xhr.onload = function() {

    var text = xhr.responseText;
    //var mydata=JSON.parse(text);
    console.log('going in');



    update(text);

  };




  xhr.onerror = function() {
    console.log('Woops, there was an error making the request.');
  };

  xhr.send();
}

window.onload=makeCorsRequest();

//call after every 2minutes
//setInterval(makeCorsRequest, 120*1000);

