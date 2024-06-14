


// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

let button = document.getElementById("btn");
let input = document.getElementById("city");
button.addEventListener("click", () =>{
    
})

const getWeather = (cityName) =>{
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=088a411a8f40b0a69026273c68143f57&units=metric`;
    // show loading
    const messageElement = document.getElementById("tempreture");
    messageElement.innerText = `Loading...`;
    messageElement.style.color = "orange";

  axios.get(url)
  
  .then(function (response) {
    //const messageElement = document.getElementById("tempreture");
    messageElement.innerText = ` Tempreture is: ${response.data.main.temp} Celsius`;
    messageElement.style.color = "white";
    input.value = "";

    
    console.log(response.data.main.temp);
    
  })
  .catch(function (error) {
    // const messageElement = document.getElementById("tempreture");
    messageElement.innerText = `Enter a correct city name please.`;
    messageElement.style.color = "red";
    input.value = "";

  })
  .finally(function () {
    console.log("All done")
    // always executed
  });
  //Show loading message

}
// API Key : 088a411a8f40b0a69026273c68143f57

window.onload = ()=>{
    let button = document.getElementById("btn");
    let input = document.getElementById("city");
    button.addEventListener("click", () =>{
    // Get City Name from input
    const cityName = document.getElementById("city").value;

    //Call getWeather function and pass city name as argument

    getWeather(cityName);
})

}
