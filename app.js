const fetchData = new Fetch();
const ui = new UI();

const inputData = document.getElementById("inputLocation");
const button = document.getElementById("submit");

button.addEventListener("click", () => {
    const locationVal = inputData.value;
    fetchData.getData(locationVal).then((data) => {
        ui.populateUI(data);
    });

});