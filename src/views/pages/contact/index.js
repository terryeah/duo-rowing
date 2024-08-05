import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import createDivider from '../../components/global/divider';
import Footer from '../../components/global/footer';

import ContactBody from './contact.body';
import ContactForm from './contact-form';
import Contactbottom from './contact-bottom';

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
        ${Contactbottom().outerHTML}
        ${createDivider('right-aligned').outerHTML}
        ${Footer().outerHTML}
    `;
}
