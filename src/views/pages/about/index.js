import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import Footer from '../../components/global/footer';

export default function About() {
    const aboutPage = document.createElement('div');

    aboutPage.innerHTML = `
        <section class="hero">
            ${hero().outerHTML}
        </section>
        <!-- Other home page content -->
    `;

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${aboutPage.outerHTML}
        ${Footer().outerHTML}
    `;
}
