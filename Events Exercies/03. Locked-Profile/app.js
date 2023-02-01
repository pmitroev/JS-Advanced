function lockedProfile() {
    const buttons = document.querySelectorAll('.profile button');

    for (const button of buttons) {
        button.addEventListener('click', onclick);
    }

    function onclick(event) {
        const radioButton = event.target.parentElement.querySelector('input[type="radio"]').checked;
        const hiddenElement = event.target.parentElement.querySelector('div');
        const buttonText = event.target;

        if(buttonText.textContent === 'Show more' && radioButton === false) {
            hiddenElement.style.display = 'block';
            buttonText.textContent = 'Hide it';
        } else if (buttonText.textContent === 'Hide it' && radioButton === false) {
            hiddenElement.style.display = 'none';
            buttonText.textContent = 'Show more';
        }
    }
}