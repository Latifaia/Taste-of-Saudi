
alert("hello")


/*fetch('https://api.openai.com/v1/completions')
.then(response => response.text()) // Read the response as text
.then(html => alert(html));
*/


 /*document.getElementById("submit").addEventListener("click" , function() {
    sendChatGPT();
   // alert(val);
});*/

//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



// let sub=document.getElementById("submit")
// sub.addEventListener("click" ,   sendChatGPT );

 async function sendChatGPT() {
    var myHeaders = new Headers();
  
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("customer-id", "3195246080");
    myHeaders.append("x-api-key", "zqt_vnOWAGiTydRlPVZhwMxuf5vPHdr39_T83dCYPA");

    
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");
    myHeaders.append("Access-Control-Allow-Methods", "*");




    var raw = JSON.stringify({
      "model": "text-davinci-003",
      "prompt": "list 6 saudi dishes",
      "max_tokens": 70,
      "temperature": 0
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
       body: raw,
      redirect: 'follow'
    };
  
    
      await fetch("https://experimental.willow.vectara.io/v1/completions", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
/*
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("customer-id", "3195246080");
myHeaders.append("x-api-key", "zqt_vnOWAFNe8SKGto3dscW5zEGX48L3nJuLaKMcWQ");

var raw = JSON.stringify({
  "model": "text-davinci-003",
  "prompt": "Say this is a test",
  "max_tokens": 7,
  "temperature": 0
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://experimental.willow.vectara.io/v1/completions", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  */

  function submit() {
   
    console.log( "hello");

  }
