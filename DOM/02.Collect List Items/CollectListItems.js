function extractText() {
    const items = document.getElementById('items').children;

    const itemsArray = Array.from(items);

    const result = itemsArray
        .map(li => li.textContent)
        .join('\n');

    document.getElementById('result').value = result;
}