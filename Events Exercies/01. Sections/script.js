function create(words) {
    let parent = document.getElementById('content');
    
    let elements = words;

    for (let element of elements) {
        let div = document.createElement('div');
        let p = document.createElement('p');

        let text = document.createTextNode(element);

        p.appendChild(text);
        p.style.display = 'none';
        div.appendChild(p);

        div.addEventListener('click', onClick)

        parent.appendChild(div);
    }

    function onClick(event) {
        event.target.children[0].style.display = 'block';
    }
}