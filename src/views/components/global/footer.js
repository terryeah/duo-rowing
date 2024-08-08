export default function Footer(){
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="footer-container">
            <div class="footer-box">
                <div class="footer-logo">
                    <img src="/images/logo-main.png" alt="Duo logo">
                </div>
                <div class="index">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Product</li>
                        <li>Contact</li>
                    </ul>
                </div>
                
                <div class="contact">
                    <div class="contact-text">
                        Contact
                    </div>
                    <div class="contact-info">
                        <p>PH: <a href="tel:0437849062">0437 849 062</a></p>
                        <p>Email: <a href="mailto:duo.rowing@gmail.com">duo.rowing@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    return footer;
}
