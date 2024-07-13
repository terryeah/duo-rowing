import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import Footer from '../../components/global/footer';

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

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${contactPage.outerHTML}
        ${Footer().outerHTML}
    `;
}
