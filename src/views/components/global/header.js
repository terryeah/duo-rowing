export default function Header() {
    const header = document.createElement('header');
    header.className = 'header'; // Add class for styling
    header.innerHTML = `
        <div class="row">
            <div class="col">
                <a href="/">
                <img class="main-logo" src="/images/logo.svg" alt="Logo" width="61" height="51" />
                </a>
            </div>
            <div class="col">
                <img class="mobile-menu" src="/images/mobile-menu.svg" alt="Mobile Menu" width="50" height="20" />
            </div>
        </div>
    `;

    return header;
}
