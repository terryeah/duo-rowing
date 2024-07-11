import hero from './hero';

export default function Contact() {
    const contactPage = document.createElement('div');

    contactPage.innerHTML = `
        <section class="hero">
            ${hero().outerHTML}
        </section>
        <!-- Other home page content -->
        <div>
            <p>Contact message test</p>
        </div>
    `;

    return contactPage.outerHTML;
}
