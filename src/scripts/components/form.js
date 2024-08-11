export function initialiseForm() {
  const contactForm = document.querySelector('form');
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const asterisks = document.querySelectorAll('.asterisk');
  const validationMessage = document.querySelector('.form-validation-message');
  const fields = contactForm.querySelectorAll('input:not([type="hidden"]):not([name="_honey"]), textarea');

  function validateField(field) {
    const isValid = field.value.trim() !== '';
    return isValid;
  }

  function showValidationFeedback(show) {
    asterisks.forEach(asterisk => {
      asterisk.style.display = show ? 'block' : 'none';
    });
    validationMessage.style.display = show ? 'flex' : 'none';
  }

  function validateForm() {
    let isValid = true;
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });
    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      showValidationFeedback(false);
      contactForm.submit();
    } else {
      showValidationFeedback(true);
    }
  }

  function handleInput() {
    if (validateForm()) {
      showValidationFeedback(false);
    }
  }

  if (submitButton) {
    submitButton.addEventListener('click', handleSubmit);
  } else {
    console.log('Submit button not found');
  }

  fields.forEach(field => {
    field.addEventListener('input', handleInput);
  });

  showValidationFeedback(false);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiseForm);
} else {
  initialiseForm();
}
