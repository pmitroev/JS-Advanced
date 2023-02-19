function addItem() {
    const input = document.getElementById('newItemText');

    if (!input.value == '') {
        let li = document.createElement('li');
        li.textContent = input.value;

        const list = document.getElementById('items');
        list.appendChild(li);
        input.value = '';
    }


}