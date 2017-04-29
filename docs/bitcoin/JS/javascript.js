function RequeteAPI(url,elementID) {

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myObj = this.responseText;
          var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
          document.getElementById(elementID).innerHTML = jsonPretty;
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

}

function HomePageLoading1()
{
  url = 'https://bitcoin.mubiz.com/info';
  elementID = 'info';
  RequeteAPI(url,elementID);
}
function HomePageLoading2()
{
  url = 'https://bitcoin.mubiz.com/blockchaininfo';
  elementID = "blockchaininfo";
  RequeteAPI(url,elementID);
}

function HomePageLoading3()
{
  url = 'https://bitcoin.mubiz.com/mininginfo';
  elementID = "mininginfo";
  RequeteAPI(url,elementID);
}

function HomePageLoading4()
{
  url = 'https://bitcoin.mubiz.com/peerinfo';
  elementID = "peerinfo";
  RequeteAPI(url,elementID);
}
