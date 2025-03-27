function weather() {
    let temp = parseFloat(document.getElementById("temp").value);

    if (isNaN(temp)) {
      document.getElementById("demo").innerHTML = "Please enter a valid temperature!";
    }
    else if (temp > 30) {
      document.getElementById("demo").innerHTML = "Hot 🥵";
    } else if (temp >= 23 && temp <= 29) {
      document.getElementById("demo").innerHTML = "Warm 😀";
    } else if (temp >= 15 && temp <= 22) {
      document.getElementById("demo").innerHTML = "Cool ☀️";
    } else {
      document.getElementById("demo").innerHTML = "Cold 🥶";
    }





    let unit = document.getElementById("unit").value;

    let convertedTemp;
    if (unit === "fahrenheit") {
      convertedTemp = ((temp - 32) * 5) / 9;
      document.getElementById("tempc").innerHTML = `Converted: ${convertedTemp.toFixed(2)} °C`;

    } else {
      convertedTemp = (temp * 9) / 5 + 32;
      document.getElementById("tempc").innerHTML = `Converted: ${convertedTemp.toFixed(2)} °F`;
    }

  }
