export default function ContactBody() {
    const section = document.createElement('section');

    section.className = 'contact-body';
    section.innerHTML = `
        <div class="contact-container">
            <div class="contact-contentsbox">
                <div class="contact-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.</p>
                </div>
            </div>
        </div>
 
    `
    return section;
}