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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/product">Product</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                
                <div class="contact">
                    <div class="contact-info">
                        <p>PH: <a href="tel:+61437849062">0437 849 062</a></p>
                        <p>Email: <a href="mailto:duo.rowing@gmail.com">duo.rowing@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    `;

    return footer;
}