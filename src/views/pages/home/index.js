import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import createDivider from '../../components/global/divider';
import HomeProducts from './home-products.js';
import Mission from './mission.js';
import Testimonial from './testimonial.js';
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
        ${HomeProducts().outerHTML}
        ${Mission().outerHTML}
        ${Testimonial().outerHTML}
        ${Footer().outerHTML}
    `;
}
