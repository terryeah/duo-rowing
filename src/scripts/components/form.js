/**
 * initialises the form handling functionality.
 * This function serves as the entry point, setting up event listeners and initial state.
 */
export function initialiseForm() {
  const contactForm = document.querySelector('form');
  const submitButton = contactForm?.querySelector('button[type="submit"]');
  const asterisks = document.querySelectorAll('.asterisk');
  const validationMessage = document.querySelector('.form-validation-message');
  const fields = contactForm?.querySelectorAll('input:not([type="hidden"]):not([name="_honey"]), textarea');

  const sentMessage = document.querySelector('.sent-message');

  /**
   * Validates a single form field.
   * @param {HTMLInputElement|HTMLTextAreaElement} field - The field to validate.
   * @returns {boolean} True if the field is valid, false otherwise.
   */
  function validateField(field) {
    const isValid = field.value.trim() !== '';
    return isValid;
  }

  /**
   * Shows or hides validation feedback elements.
   * @param {boolean} show - Whether to show (true) or hide (false) feedback.
   */
  function showValidationFeedback(show) {
    asterisks.forEach(asterisk => {
      asterisk.style.display = show ? 'block' : 'none';
    });
    if (validationMessage) {
      validationMessage.style.display = show ? 'flex' : 'none';
    }
  }

  function showSentMessage(show) {
    sentMessage.style.display = show ? 'block' : 'none';
  }

  /**
   * Validates the entire form by checking all fields.
   * Called by both handleSubmit and handleInput.
   * @returns {boolean} True if all fields are valid, false otherwise.
   */
  function validateForm() {
    let isValid = true;
    fields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });
    return isValid;
  }

  /**
   * Handles form submission.
   * Prevents default submission, validates the form, and either submits or shows feedback.
   * @param {Event} event - The submit event.
   */
  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      showValidationFeedback(false);
      contactForm.submit();
      showSentMessage(true);
    } else {
      showValidationFeedback(true);
    }
  }

  /**
   * Handles input changes in form fields.
   * Validates the form on each input and updates feedback accordingly.
   */
  function handleInput() {
    if (validateForm()) {
      showValidationFeedback(false);
    }
  }

  // Set up event listeners
  if (submitButton) {
    submitButton.addEventListener('click', handleSubmit);
  } 

  // Assign handleInput function to input fields if they exist
  if (fields) {
    fields.forEach(field => {
      field.addEventListener('input', handleInput);
    });
  }

  // initialise validation feedback (hidden by default)
  showValidationFeedback(false);
}

// Run initialisation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiseForm);
} else {
  initialiseForm();
}
