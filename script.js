 function getWeather() {
        const location = document.getElementById("locationInput").value;
        const resultDiv = document.getElementById("weatherResult");

        if (location === "") {
            resultDiv.innerHTML = "<p class='error'>Please enter a location.</p>";
            return;
        }

        const apiKey = "b1281b0e29414a20baa32435261302";
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    resultDiv.innerHTML = `<p class='error'>${data.error.message}</p>`;
                } else {
                    const temp = data.current.temp_c;
                    const condition = data.current.condition.text;
                    resultDiv.innerHTML = `
                        <p><strong>Location:</strong> ${data.location.name}</p>
                        <p><strong>Temperature:</strong> ${temp} °C</p>
                        <p><strong>Condition:</strong> ${condition}</p>
                    `;
                }
            })
            .catch(error => {
                resultDiv.innerHTML = "<p class='error'>Something went wrong!</p>";
            });
    }