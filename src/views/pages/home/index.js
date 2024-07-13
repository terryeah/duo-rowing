import hero from './hero';
import createDivider from '../../components/global/divider';
import Footer from '../../components/global/footer';

export default function Home() {
    const heroSection = document.createElement('section');
    const footer = document.createElement('footer');

    heroSection.classList.add('hero');

    heroSection.innerHTML = `
        ${hero().outerHTML}
        ${createDivider('left-aligned').outerHTML}
    `;

    footer.innerHTML = `
        ${Footer().outerHTML}
    `;

    return `
        ${heroSection.outerHTML}
        ${footer.outerHTML}
    `;
}
