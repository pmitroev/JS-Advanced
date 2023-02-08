function ticketSorter(tickets, criteria) {
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    
    tickets.map((x) => {
        let [destination, price, status] = x.split('|');
        price = Number(price);
        result.push(new Ticket(destination, price, status));
    });
    
    return result.sort((a, b) => {
        if(typeof a[criteria] === 'number') {
            return a[criteria] - b[criteria];
        } else {
            return a[criteria].localeCompare(b[criteria]);
        }
    })
}

ticketSorter(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price')