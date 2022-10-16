class UI {
    constructor() {
        this.uiContainer = document.getElementById("content");
        this.city;
    }

    populateUI(data) {
        this.uiContainer.innerHTML = `
        <div>

            <h1 style="font-weight: 600;">${data.name}</h1>
            <h1 style="font-weight: 500;">is currently ${data.main.temp}°C.</h1>
            <h1 style="font-weight: 500;">Maximum temperature: ${data.main.temp_max}°C.</h1>
            <h1 style="font-weight: 500;">Minimum temperature: ${data.main.temp_min}°C.</h1>


        </div>
        `;

    }

    
}