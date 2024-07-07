import hero from './hero';

export default function Home() {
    const section = document.createElement('section');
    section.classList.add('hero');

    section.innerHTML = `
        ${hero().outerHTML}
        <!-- Other home page content -->
    `;

    return section.outerHTML;
}
