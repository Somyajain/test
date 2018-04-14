
////var ourRequest=new XMLHttpRequest();
////ourRequest.open('GET','https://api.coinmarketcap.com/v1/ticker/bitcoin');
////ourRequest.onLoad=function(){
////    var mydata=JSON.parse(ourRequest.responseText);
////    console.log(mydata[0]);
////
////};
////ourRequest.send();
//

function update(value){
    value="["+value+"]";
    var jsonshit=JSON.parse(value);



    $(document).ready(function(){

        //$('#cryptotable > tbody:last-child').append('<tr><td>asd</td><td>lll</td></tr>');
        //$('#cryptotable  tr:nth-child(6)').appebd('<tr><td>HELLO</td><td>HELL2O</td><td>HELLO3</td><td>VEnus</td></tr>');

        $.each([ 1,2,3,4,5,6,7,8,9 ], function( index, value ) {
            $('#cryptotable tr:nth-child(2)').remove();

        });

        //+jsonshit[0][3].name;
        //$('#cryptotable > tbody:last-child').append('<tr id=\"4\""><td>'+jsonshit[0][4].value+'</td>        <td>'+typein+'</td>        <td>' + jsonshit[0][4].market_cap_usd + '</td>        <td>' + jsonshit[0][4].price_usd + '</td>        <td>'+jsonshit[0][4].percent_change_24h+'</td>        <td>graph</td>    </tr>');
       // $('#cryptotable > tbody:last-child').append('<tr id=\"5\"><td>data1</td> </tr>');
        //       <td>typein</td>        <td>' + jsonshit[0][4].market_cap_usd + '</td>        <td>' + jsonshit[0][4].price_usd + '</td>        <td>'+jsonshit[0][4].percent_change_24h+'</td>        <td>graph</td>    </tr>');
console.log(jsonshit);
        $.each([ 1,2,3,4,5,6,7,8,9 ], function( index, value ) {

            $('#cryptotable > tbody:last-child').append('<tr id="'+value+'"> <td>'+value+'</td>    <td><a href="currency/'+jsonshit[0][index].name+'">'  +jsonshit[0][index].name+'</a></td>        <td>' + jsonshit[0][index].market_cap_usd + '</td>        <td>' + jsonshit[0][index].price_usd + '</td>        <td>'+jsonshit[0][index].percent_change_24h+'</td>        <td>graph</td>    </tr>');
        });


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
//
//setInterval(function(){
//makeCorsRequest()}, 500000);

//
//function changevalues()
//{
//    var myTable = document.getElementById('cryptotable');
//   // for (i = 0; i < cars.length; i++) {
//    //text += cars[i] + "<br>";
////}
//    //var tbl = document.getElementById('my-table');
//
//
////var row = myTable.insertRow(3);
//    //var cell1 = row.insertCell(0);
//    //var cell2 = row.insertCell(1);
//    //cell1.innerHTML = "gg ggg";
//    //cell2.innerHTML = "aaaa ssss";
//    //myTable.rows[1].cells[1].innerHTML = 'AAAAA';
//}
//
//changevalues();


makeCorsRequest();

fetch('https://smsapi.engineeringtgr.com/send/?Mobile=00000008800786016$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&Password=2843&Message=sillicaisgud&To=8800786016&Key=vaibhqL3eOKmrIpC15dgZbH26U4') // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});