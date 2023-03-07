async function attachEvents() {
    const inputElement = document.getElementById('location');
    const submitBtn = document.getElementById('submit');
    const forecastElement = document.getElementById('forecast');
    const currentElement = document.getElementById('current');
    const upcomingElement = document.getElementById('upcoming');

    const icons = {
        sunny: '&#x2600;',
        "partly sunny": '&#x26C5;',
        overcast: '&#x2601;',
        rain: '&#x2614;',
        degrees: String.fromCharCode(176),
    }

    const divForecast = factory('div', false, 'forecasts');
    const divInfo = factory('div', false, 'forecast-info');

    submitBtn.addEventListener('click', onClick);

    function onClick() {
        divForecast.innerHTML = '';
        divInfo.innerHTML = '';

        fetch('http://localhost:3030/jsonstore/forecaster/locations')
            .then(response => response.json())
            .then(procesingData)
            .catch(err => console.log(err))
    }

    function procesingData(data) {
        const currentLocation = data.find(x => x.name == inputElement.value);
        if (currentLocation == undefined) {
            throw new Error('The location is not supported');
        }

        fetch(`http://localhost:3030/jsonstore/forecaster/today/${currentLocation.code}`)
            .then(response => response.json())
            .then(renderCurrentWeather)


        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${currentLocation.code}`)
            .then(response => response.json())
            .then(renderThreeDaysAhead)
    }

    function renderCurrentWeather(data) {
        const symbolSpan = factory('span', false, 'condition symbol');
        Object.keys(icons)
            .forEach(x => x == data.forecast.condition.toLowerCase() ? symbolSpan.innerHTML = icons[x] : null);
        divForecast.appendChild(symbolSpan);

        const conditionSpan = factory('span', false, 'condition', divForecast);
        factory('span', data.name, 'forecast-data', conditionSpan);
        factory('span', `${data.forecast.low}${icons.degrees}/${data.forecast.high}${icons.degrees}`, 'forecast-data', conditionSpan);
        factory('span', data.forecast.condition, 'forecast-data', conditionSpan);
        currentElement.appendChild(divForecast);
        forecastElement.style.display = 'block';
    }

    function renderThreeDaysAhead(data) {
        data.forecast.forEach(day => {
            const upcomingSpan = factory('span', false, 'upcoming', divInfo)

            const firstSpan = factory('span', false, 'symbol', upcomingSpan);
            Object.keys(icons)
                .forEach(x => x == day.condition.toLowerCase() ? firstSpan.innerHTML = icons[x] : null);

            factory('span', `${day.low}${icons.degrees}/${day.high}${icons.degrees}`, 'forecast-data', upcomingSpan);
            factory('span', day.condition, 'forecast-data', upcomingSpan);
        })
        upcomingElement.appendChild(divInfo);
        forecastElement.style.display = 'block';
    }
    
    function factory (el, text, className, toAppend) {
        const element = document.createElement(el);
        if (text) {
            element.textContent = text;
        }

        if (className) {
            element.setAttribute('class', className);
        }

        if (toAppend) {
            toAppend.appendChild(element);
        }

        return element;
    }
    
}
  
attachEvents();