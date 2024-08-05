import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import Footer from '../../components/global/footer';

import ContactBody from './contact.body';
import ContactForm from './contact-form';

export default function Contact() {
    const contactPage = document.createElement('div');

    contactPage.innerHTML = `
        <section class="hero">
            ${hero().outerHTML}
        </section>
        <!-- Other home page content -->
    `;

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${contactPage.outerHTML}
        ${ContactBody().outerHTML}
        ${ContactForm().outerHTML}
        ${Footer().outerHTML}
    `;
}
