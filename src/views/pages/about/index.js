import hero from './hero';

export default function About() {
    const aboutPage = document.createElement('div');

    aboutPage.innerHTML = `
        <section class="hero">
            ${hero().outerHTML}
        </section>
        <!-- Other home page content -->
    `;

    return aboutPage.outerHTML;
}
