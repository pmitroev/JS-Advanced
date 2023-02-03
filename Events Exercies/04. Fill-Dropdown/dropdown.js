function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.text = text;
    option.value = value;

    let menu = document.getElementById('menu');
    
    if (text !== '' && value !== '') {
        menu.appendChild(option);
    }

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}