import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import createDivider from '../../components/global/divider';
import Footer from '../../components/global/footer';

export default function Home() {
    const heroSection = document.createElement('section');

    heroSection.classList.add('hero');
    heroSection.innerHTML = `
        ${hero().outerHTML}
        ${createDivider('left-aligned').outerHTML}
    `;

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${heroSection.outerHTML}
        ${Footer().outerHTML}
    `;
}
