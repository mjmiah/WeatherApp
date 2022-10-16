class Fetch {
    async getData(cityName) {
        const apiKey; // = (your api key)
 
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        ); //uses inputted data to make a request to the website

        const data = await response.json();

        console.log(data);
        
        return data;
    }
}