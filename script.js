const searchBtn = document.querySelector("button");
const cityInput = document.querySelector("input");

searchBtn.addEventListener("click", async () => {

    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "1705152674d6298c59225a10fba9a02e";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        document.querySelector("h2").innerText =
            data.name;

        document.querySelector(".text-6xl").innerText =
            `${Math.round(data.main.temp)}°C`;

        document.querySelector(".text-xl").innerText =
            data.weather[0].description;

        document.querySelectorAll(".text-2xl")[0].innerText =
            `${data.main.humidity}%`;

        document.querySelectorAll(".text-2xl")[1].innerText =
            `${data.wind.speed} km/h`;

        document.querySelector("img").src =
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    } catch (error) {

        console.log(error);
        alert("Something went wrong");

    }

});