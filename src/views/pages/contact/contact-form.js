export default function ContactForm() {
  const section = document.createElement('section');

  section.className = 'contact-form';
  section.innerHTML = `
    <div class="form-container">
      <div class="form-line"></div>
      <div class="contact-form">
        <h2>ENQUIRE TODAY</h2>
        <form action="https://formsubmit.co/c7a3ed9400bc4121857cd5bcda2d6416" method="POST">
          <input type="hidden" name="_subject" value="Duo Rowing - Form Submission">
          <input type="hidden" name="_cc" value="n0217ayumi@gmail.com">
          <input type="hidden" name="_captcha" value="false">
          <input type="text" name="_honey" style="display:none">
          <div class="input-row">
            <p>FULL NAME:</p>
            <input type="text" name="full-name" required>
            <p>EMAIL:</p>
            <input type="email" name="email" required>
          </div>
          <div class="input-row">
            <p>PHONE NUMBER:</p>
            <input type="tel" name="phone-number" required>
            <p>SCHOOL/CLUB:</p>
            <input type="text" name="school-club" required>
          </div>
          <p class="message-text">LEAVE A MESSAGE</p>
          <div class="input-row">
            <textarea name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>    
  `
  return section;
}
