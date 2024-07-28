export function initialiseForm() {
    const contactForm = document.querySelector('form');
    const inputField = contactForm.querySelector('textarea');
    const submitButton = contactForm.querySelector('button');

    async function handleForm() {
        if (inputField.value.length === 0) {
            alert('Please type something in the text field.');
        } else {
            await submitForm(inputField.value);
        }
    }

    function submitForm(value) {
        contactForm.submit();
    }

    if (contactForm && submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            handleForm();
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiseForm);
} else {
    initialiseForm();
}
