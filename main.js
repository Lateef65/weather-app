document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Description: ${description}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
