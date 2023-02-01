function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick() {
        let input = JSON.parse(document.querySelector('#inputs textarea').value);

        let avgSalary = 0;
        let totalSalary = 0;
        let currAvgSalary = 0;
        let bestName = '';

        let output = {};

        for (const line of input) {
            let info = line.split(' - ');
            let restaurantName = info.shift();
            let workersData = info[0].split(', ');

            for (const worker of workersData) {
                let [name, salary] = worker.split(' ');

                if (!output.hasOwnProperty(restaurantName)) {
                    output[restaurantName] = {};
                }

                if (output.hasOwnProperty(restaurantName)) {
                    output[restaurantName][name] = Number(salary);
                }
            }
        }
        let entries = Object.entries(output);
        
    }
}