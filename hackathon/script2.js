
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
      "prompt": "list only the name of 6 popular saudi arabia local dishes that doesn't correlate with any arab countries",
      "max_tokens": 400,
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

     
      spliting(finalResult);
  }

  function spliting(result){
   
  // console.log("the choices areeee", result.choices[0].text);
   let str = result.choices[0].text

   let arr = str.split("\n")
 
  

   
   for(let i=2;i<8;i++)
   {
   
document.getElementById("d"+i).innerHTML=arr[i]
document.getElementById("b"+i).setAttribute("dishName", arr[i]);
console.log(document.getElementById("b"+i))

//sendChatGPT2(arr[i])
   }
    
  
  

  }

/*
  async function sendChatGPT2(name) {
    var myHeaders = new Headers();
  
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("customer-id", "3195246080");
    myHeaders.append("x-api-key", "zqt_vnOWAGiTydRlPVZhwMxuf5vPHdr39_T83dCYPA");

    
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Headers", "*");
    myHeaders.append("Access-Control-Allow-Methods", "*");




    var raw = JSON.stringify({
      "model": "text-davinci-003",
      "prompt": "write short discription about saudi"+name,
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
      alert("done2")
      console.log(str)
  }*/