//contact/index.js
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
        <article class="contact-body">
            ${ContactBody().outerHTML}
        </article>
        <section class="contact-form">
            ${ContactForm().outerHTML}
        </section>
        <section class="contact-bottom">
            ${Contactbottom().outerHTML}
        </section>
        ${createDivider('right-aligned').outerHTML}
    `;

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${contactPage.outerHTML}
        ${Footer().outerHTML}
    `;
}
