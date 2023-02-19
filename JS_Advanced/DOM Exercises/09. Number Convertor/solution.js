function solve() {
    document.querySelector('#container button').addEventListener('click', onClick)
    
    const input = document.getElementById('input');
    const selectMenuTo = document.querySelector('#container #selectMenuTo');

    const result = document.getElementById('result');

    //добавям опциите в менюто
    const binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    selectMenuTo.add(binaryOption);
    const hexOption = document.createElement('option');
    hexOption.textContent = 'Hexadecimal';
    hexOption.value = 'hexadecimal';
    selectMenuTo.add(hexOption);


    function onClick() {
        const selectedTypeTo = selectMenuTo.value;

        let converted = '';

        switch(selectedTypeTo) {
            case 'binary':
                converted = Number(input.value).toString(2);
                break;
            case 'hexadecimal':
                converted = Number(input.value).toString(16).toUpperCase();
                break;
        }
        result.value = converted;
    }
}