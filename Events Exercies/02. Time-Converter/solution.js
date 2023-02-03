function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let ration = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    document.getElementById('daysBtn').addEventListener('click', onClick);
    document.getElementById('hoursBtn').addEventListener('click', onClick);
    document.getElementById('minutesBtn').addEventListener('click', onClick);
    document.getElementById('secondsBtn').addEventListener('click', onClick);

    function convert(value, unit) {
        let days = value / ration[unit];

        return {
            days : days,
            hours : days * ration.hours,
            minutes : days * ration.minutes,
            seconds : days * ration.seconds
        }
    }

    function onClick(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id) 

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}