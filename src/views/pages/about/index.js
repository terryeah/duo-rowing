import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import createDivider from '../../components/global/divider';
import Footer from '../../components/global/footer';

import AboutBody from './about-body';

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
        ${AboutBody().outerHTML}
        ${createDivider('right-aligned').outerHTML}
        ${Footer().outerHTML}
    `;
}
