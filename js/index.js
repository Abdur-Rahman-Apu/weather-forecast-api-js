const loadData = (city) => {
    const apiKey = "80b042b34a2149025fb607ef8c46c6d7";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}

const setInnerText = (id, value) => {
    const field = document.getElementById(id);
    field.innerText = value;
}

const displayData = data => {
    const temp = data.main.temp;
    const city = data.name;
    const condition = data.weather[0].main;



    //set Country name
    setInnerText('city', city);

    // set temperature
    setInnerText('temp', temp);

    //set condition
    setInnerText('condition', condition);

}

document.getElementById('submit').addEventListener('click', function () {
    const inputField = document.getElementById('country-field');
    const city = inputField.value;
    loadData(city);
})

loadData('dhaka');