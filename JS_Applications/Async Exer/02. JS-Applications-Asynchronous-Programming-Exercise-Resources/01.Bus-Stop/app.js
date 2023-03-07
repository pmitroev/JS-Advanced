async function getInfo() {

    const stopId = document.getElementById('stopId').value;
    const stopNameElement = document.getElementById('stopName');
    const timetable = document.getElementById('buses');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        stopNameElement.textContent = 'Loading...'
        timetable.replaceChildren();
        const res = await fetch(url);

        if (res.status != 200) {
            throw new Error('Stop ID not found');
        }
        const data = await res.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(b => {
            const li = document.createElement('li');

            li.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
            timetable.appendChild(li);


        })
    } catch (error) {
        stopNameElement.textContent = 'Error';
    }
}