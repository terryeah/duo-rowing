export default function ContactForm() {
  const section = document.createElement('section');

  section.className = 'contact-form';
  section.innerHTML = `
    <div class="form-container">
      <div class="form-line"></div>
      <div class="contact-form">
        <h2>ENQUIRE TODAY</h2>
        <form action="https://formsubmit.co/n0217ayumi@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Duo Rowing - Form Submission">
          <input type="hidden" name="_cc" value="n0217ayumi@gmail.com">
          <input type="hidden" name="_captcha" value="false">
          <input type="text" name="_honey" style="display:none">

          <!-- Redirect to the contact page after form submission -->
          <input type="hidden" name="_next" value="http://localhost:5173/contact">

          <div class="input-row">
            <div class="input-contents space">
              <span class="asterisk">*</span>
              <p>FULL NAME:</p>
              <input type="text" name="full-name">
            </div>
            <div class="input-contents">
              <span class="asterisk">*</span>
              <p>EMAIL:</p>
              <input type="email" name="email">
            </div>
          </div>

          <div class="input-row">
            <div class="input-contents space">
              <span class="asterisk">*</span>
              <p>PHONE NUMBER:</p>
              <input type="tel" name="phone-number">
            </div>
            <div class="input-contents">
              <span class="asterisk">*</span>
              <p>SCHOOL/CLUB:</p>
              <input type="text" name="school-club">
            </div>
          </div>

          <div class="d-flex">
            <span class="asterisk">*</span>
            <p>LEAVE A MESSAGE</p>
          </div>
          <div class="input-row">
            <textarea name="message" rows="5"></textarea>
          </div>

          <button type="submit">Submit</button>
          <div class="d-flex form-validation-message">
            <span class="asterisk">*</span>
            <p>Required Field</p>
          </div>
          <div class="">
            <p class="sent-message">MESSAGE SENT SUCCESSFULLY!</p>
          </div>
        </form>
      </div>
    </div>    
  `;
  return section;
}
