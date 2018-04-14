
////var ourRequest=new XMLHttpRequest();
////ourRequest.open('GET','https://api.coinmarketcap.com/v1/ticker/bitcoin');
////ourRequest.onLoad=function(){
////    var mydata=JSON.parse(ourRequest.responseText);
////    console.log(mydata[0]);
////
////};
////ourRequest.send();
//

$.fn.digits = function(){
    return this.each(function(){
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
    })
};




function update(value){
    value="["+value+"]";
    var jsonshit=JSON.parse(value);



    $(document).ready(function(){

        //$('#cryptotable > tbody:last-child').append('<tr><td>asd</td><td>lll</td></tr>');
        //$('#cryptotable  tr:nth-child(6)').appebd('<tr><td>HELLO</td><td>HELL2O</td><td>HELLO3</td><td>VEnus</td></tr>');

        //$.each([ 1,2,3,4,5,6,7,8,9 ], function( index, value ) {
        //    $('#cryptotable > tbody>tr:nth-child(1)').remove();
        //
        //});

        //+jsonshit[0][3].name;
        //$('#cryptotable > tbody:last-child').append('<tr id=\"4\""><td>'+jsonshit[0][4].value+'</td>        <td>'+typein+'</td>        <td>' + jsonshit[0][4].market_cap_usd + '</td>        <td>' + jsonshit[0][4].price_usd + '</td>        <td>'+jsonshit[0][4].percent_change_24h+'</td>        <td>graph</td>    </tr>');
       // $('#cryptotable > tbody:last-child').append('<tr id=\"5\"><td>data1</td> </tr>');
        //       <td>typein</td>        <td>' + jsonshit[0][4].market_cap_usd + '</td>        <td>' + jsonshit[0][4].price_usd + '</td>        <td>'+jsonshit[0][4].percent_change_24h+'</td>        <td>graph</td>    </tr>');
    //console.log(jsonshit);
        var set1= [ "Bitcoin","Ethereum", "Ripple", "Bitcoin Cash","Litecoin", "Cardano", "EOS",  "NEO","Stellar"  ];
        var set2= [  "Bitcoin Cash","Bitcoin","Ethereum", "Ripple", "Cardano", "EOS","Litecoin","Stellar" ,  "NEO" ];
        var pos=[];
        //fruits.indexOf(
        var dict = {};

        for(iz3=0;iz3<9;iz3++)
        {
            for(iz2=0;iz2<40;iz2+=1) {
                 if(jsonshit[0][iz2].name==set2[0]) {
                     set2.shift();
                     pos.push(iz2);
                     dict[iz2]=jsonshit[0][iz2].name;
                     break;


                 }
            }

        }
        pos.sort(function(a, b){return a-b});

        console.log(dict);
        console.log(pos);
        var set3=[];
        for(k1=0;k1<9;k1+=1) {
            set3.push(dict[pos[k1]]);
        }


        $.each([ 1,2,3,4,5,6,7,8,9 ], function( index, value ) {
            var theindex1=-1;
            for(iz2=0;iz2<40;iz2+=1)
            {
                if(set3.length==0)
                    break;
                if(jsonshit[0][index].name==set3[0])
                {
                   set3.shift();
                   theindex1=iz2;
                   $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(1)').text(theindex1);
                   $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(2)').html('<a href="currency/' + jsonshit[0][theindex1].name + '">' + jsonshit[0][theindex1].name + '</a>');

                   $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(3)').text('$'+jsonshit[0][theindex1].market_cap_usd);
                   $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(3)').digits();
                   $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(4)').text('$'+jsonshit[0][theindex1].price_usd );
                   $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(5)').text('$'+jsonshit[0][theindex1].percent_change_24h +'%');
                   $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(6)').html('<div class="" style="height:80px ;width:200px;border-width: 1px;border-style: solid;"><canvas style="height:80px ;width:200px;" id="' + jsonshit[0][theindex1].name + '" ></canvas></div><script>makeCorsRequest2("' + jsonshit[0][theindex1].name + '");</script>  ');
                   value+=1;
                   index+=1;
                  // iz2=0;
                }



            }































//Start shit

            //
            //if(index==8)
            //{
            //
            //for(iz1=5;iz1<40;iz1+=1)
            //{
            //    if(jsonshit[0][index].name=='EOS')
            //    {
            //        break;
            //    }
            //
            //    else{
            //
            //        index=iz1;
            //    }
            //}
            //     $('#cryptotable > tbody>tr:nth-child('+iz1+')>td:nth-child(1)').text(value);
            //     $('#cryptotable > tbody>tr:nth-child('+iz1+')>td:nth-child(2)').html('<a href="currency/' + jsonshit[0][index].name + '">' + jsonshit[0][index].name + '</a>');
            //     $('#cryptotable > tbody>tr:nth-child('+iz1+')>td:nth-child(3)').text('$'+jsonshit[0][index].market_cap_usd);
            //     $('#cryptotable > tbody>tr:nth-child('+iz1+')>td:nth-child(4)').text('$'+jsonshit[0][index].price_usd );
            //     $('#cryptotable > tbody>tr:nth-child('+iz1+')>td:nth-child(5)').text(jsonshit[0][index].percent_change_24h+'%' );
            //     $('#cryptotable > tbody>tr:nth-child('+iz1+')>td:nth-child(6)').html('<div class="" style="height:80px ;width:200px;border-width: 1px;border-style: solid;"><canvas style="height:80px ;width:200px;" id="' + jsonshit[0][index].name + '" ></canvas></div><script>makeCorsRequest2("' + jsonshit[0][index].name + '")</script>  ');
            //
            //}
            //else {
            //    //$('#cryptotable > tbody>tr:nth-child(2)').append('<tr id="' + value + '"> <td>' + value + '</td>    <td><a href="currency/' + jsonshit[0][index].name + '">' + jsonshit[0][index].name + '</a></td>        <td>' + jsonshit[0][index].market_cap_usd + '</td>        <td>' + jsonshit[0][index].price_usd + '</td>        <td>' + jsonshit[0][index].percent_change_24h + '</td>        <td><div class="container" style="height:80px ;width:200px;border-width: 1px;border-style: solid;"><canvas style="height:80px ;width:200px;" id="' + jsonshit[0][index].name + '" ></canvas></div><script>makeCorsRequest2("' + jsonshit[0][index].name + '");</script>   </td>    </tr>');
            //
            //       $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(1)').text(value);
            //       $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(2)').html('<a href="currency/' + jsonshit[0][index].name + '">' + jsonshit[0][index].name + '</a>');
            //       $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(3)').text('$'+jsonshit[0][index].market_cap_usd);
            //       $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(3)').digits();
            //       $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(4)').text('$'+jsonshit[0][index].price_usd );
            //       $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(5)').text('$'+jsonshit[0][index].percent_change_24h +'%');
            //       $('#cryptotable > tbody>tr:nth-child('+value+')>td:nth-child(6)').html('<div class="" style="height:80px ;width:200px;border-width: 1px;border-style: solid;"><canvas style="height:80px ;width:200px;" id="' + jsonshit[0][index].name + '" ></canvas></div><script>makeCorsRequest2("' + jsonshit[0][index].name + '");</script>  ');
            //       //$('#cryptotable > tbody>tr>td:nth-child('+i1+')').text(i1);
            //        //$('#cryptotable > tbody>tr>td:nth-child('+i1+')').text(i1);
            //        //$('#cryptotable > tbody>tr>td:nth-child('+i1+')').text(i1);
            //           // '<tr id="' + value + '"> <td>' + value + '</td>    <td></td>        <td>' + jsonshit[0][index].market_cap_usd + '</td>        <td>' + + '</td>        <td>' + + '</td>        <td><div class="container" style="height:80px ;width:200px;border-width: 1px;border-style: solid;"><canvas style="height:80px ;width:200px;" id="' + jsonshit[0][index].name + '" ></canvas></div><script>makeCorsRequest2("' + jsonshit[0][index].name + '");</script>   </td>    </tr>');
            //
            //}

        });
            //end shit


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



function makeCorsRequest3() {
  // This is a sample server that supports CORS.
    console.log("called myjs");
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


window.onload=makeCorsRequest3();

//call after every 2minutes
//setInterval(makeCorsRequest3, 120*1000);


//fetch('https://smsapi.engineeringtgr.com/send/?Mobile=00000008800786016$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$&Password=2843&Message=sillicaisgud&To=8800786016&Key=vaibhqL3eOKmrIpC15dgZbH26U4') // Call the fetch function passing the url of the API as a parameter
//.then(function() {
//    // Your code for handling the data you get from the API
//})
//.catch(function() {
//    // This is where you run code if the server returns any errors
//});