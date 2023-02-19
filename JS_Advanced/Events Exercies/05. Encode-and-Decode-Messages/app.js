function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('#container #main button');

    for (const button of buttons) {
        button.addEventListener('click', onClick)
    }
    
    function onClick(event) {
        const typeOperation = event.target.textContent;
        const text = event.target.parentElement.querySelector('textarea');
        const decodeText = event.target.parentElement.parentElement.children[1].querySelector('textarea');
        

        switch (typeOperation) {
            case 'Encode and send it':
                decodeText.value = encode(text.value);
                text.value = '';
                break;
        
            case 'Decode and read it': 
                text.value = decode(text.value);
                break;
        }
    }

    function encode(message) {
        let encodedMessage = '';
        for (const char of message) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }

        return encodedMessage;
    }

    function decode(encodedMessage) {
        let decodedMessage = '';
        for (const char of encodedMessage) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }

        return decodedMessage;
    }

    
}