/* accessing HTML elements */

var submitBtn = $('.submit-button')

var container = $(".answer-container")

submitBtn.on("click", responseList)

/* declaring function */
 function responseList () {
    
    var earths = $(".earths-response").val()

    console.log(earths)

    container.append(`
        <div>
         <p> Wow! ${earths} earths is not too bad, considering the rate at which humanity is going! If you were disappointed in your results, think about how you can live a more sustainable lifestyle, and check out our tabs on water, energy, recycling, and eating sustainably!</p>
        <img class = "card" src = "https://media3.giphy.com/media/dt54M1Cz0XkWtGJ13m/200.webp?cid=ecf05e47maipiwdpwnn9g7zkuy2p9b7afylg7ouxvzb1zyxs&rid=200.webp&ct=g">
          
       </div>`)

    event.preventDefault()

  }
 
 var earths=1;

  if (earths<=2){
    console.log("Wow! You're so sustainable, we need more people like you!!");
  }

  else if (earths>2){
    console.log("Hmm...think about how you can make your lifestyle more sustainable!");
  }

