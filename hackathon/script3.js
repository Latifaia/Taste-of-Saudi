function init(){ 



const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('dish');
console.log("the passed dish name is ", myParam)

sendChatGPT2(myParam)
sendChatGPT3(myParam)
searchInGoogle(myParam)


}

async function sendChatGPT2(name) {
    
    var myHeaders = new Headers();
  
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("customer-id", "3195246080");
    myHeaders.append("x-api-key", "zqt_vnOWAGiTydRlPVZhwMxuf5vPHdr39_T83dCYPA");

    
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");
    myHeaders.append("Access-Control-Allow-Methods", "*");



    let x= name.substring(2)
 
    var raw = JSON.stringify({
      "model": "text-davinci-003",
      "prompt": "write short discription about saudi "+x,
      "max_tokens": 70,
      "temperature": 1
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
       body: raw,
      redirect: 'follow'
    };
  
    
    let finalResult = null
      await fetch("https://experimental.willow.vectara.io/v1/completions", requestOptions)
      .then(response => response.json())
      .then(result => finalResult = result)
      .catch(error => console.log('error', error));

      let str = finalResult.choices[0].text
       document.getElementById("paragraph").innerHTML=str ;
       document.querySelector(".title").innerHTML=x;
      console.log(str)
  }


  
async function sendChatGPT3(name) {
    
    var myHeaders = new Headers();
  
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("customer-id", "3195246080");
    myHeaders.append("x-api-key", "zqt_vnOWAGiTydRlPVZhwMxuf5vPHdr39_T83dCYPA");

    
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");
    myHeaders.append("Access-Control-Allow-Methods", "*");



    let x= name.substring(2)
   
    var raw = JSON.stringify({
      "model": "text-davinci-003",
      "prompt": "list 3 resturants that offer "+x+"in riyadh",
      "max_tokens": 70,
      "temperature": 1
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
       body: raw,
      redirect: 'follow'
    };
  
    
    let finalResult = null
      await fetch("https://experimental.willow.vectara.io/v1/completions", requestOptions)
      .then(response => response.json())
      .then(result => finalResult = result)
      .catch(error => console.log('error', error));

      let str = finalResult.choices[0].text
     let arr = str.split("\n");
     console.log("the arrray is ", arr)

     for(let i=2;i<5;i++)
   {
   
document.getElementById("h"+(i-1)).innerHTML=arr[i]

    let link = await sendChatGPT4(arr[i])
    console.log("the link returned to anchor is ", link)
 document.getElementById("a"+i).setAttribute("href", link);



//sendChatGPT2(arr[i])
   }
      // document.getElementById("paragraph").innerHTML=str ;
      // document.querySelector(".title").innerHTML=x;
      

}



  
async function sendChatGPT4(arr) {
    
    var myHeaders = new Headers();
  
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("customer-id", "3195246080");
    myHeaders.append("x-api-key", "zqt_vnOWAGiTydRlPVZhwMxuf5vPHdr39_T83dCYPA");

    
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");
    myHeaders.append("Access-Control-Allow-Methods", "*");



    let x= arr.substring(2)

    var raw = JSON.stringify({
      "model": "text-davinci-003",
      "prompt": "Open google map and return only the url location of any "+ x +"branch in Riyadh",
      "max_tokens": 70,
      "temperature": 1
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
       body: raw,
      redirect: 'follow'
    };
  
    
    let finalResult = null
      await fetch("https://experimental.willow.vectara.io/v1/completions", requestOptions)
      .then(response => response.json())
      .then(result => finalResult = result)
      .catch(error => console.log('error', error));

      let str = finalResult.choices[0].text
      let v = str.substring(str.indexOf("h"));
      //console.log("the returned object is ", str)
      //console.log("=========after the substring", v);
return v ;
    


/*
     let arr = str.split("\n");
     console.log("the arrray is ", arr)

     for(let i=2;i<5;i++)
   {
   
document.getElementById("h"+(i-1)).innerHTML=arr[i]


//sendChatGPT2(arr[i])
   }
      // document.getElementById("paragraph").innerHTML=str ;
      // document.querySelector(".title").innerHTML=x;
    */

}

async function searchInGoogle(imageURL) {

  
  let x= imageURL.substring(2)
 
  const API_KEY = "AIzaSyBEqlp5Gg8WFBXYfyTNb-tC5n8bCoK12hQ";
  const SEARCH_ENGINE_ID="16b3945b8308b4be9";
//1425c956db6c7497d


// Encode the search query for URL use
const query = encodeURIComponent(x);
console.log(query);
// Construct the API request URL
const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&searchType=image&q=${query}`;

// Send the API request and extract the URL of the first image result
let finalResult = null

fetch(apiUrl)
  .then(response => response.json())
  //.then(result => finalResult = result)
  .then(result =>  {
    let resResult = result.items[0].image.thumbnailLink;
     console.log("result:" +  result.items[0].image.thumbnailLink)
    //  let resResult = JSON.parse(result)
    //  console.log("-----------------");
    //  console.log(resResult);  
    document.getElementById("imgTitle").src = resResult;
    })
  .catch(error => console.log({"error": error}));
 
//let val =  finalResult //.choices[0].text
//console.log("gooooogggglllleee", val)
};


