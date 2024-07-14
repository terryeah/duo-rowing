import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import createDivider from '../../components/global/divider';
import HomeProducts from './home-products.js';
import Footer from '../../components/global/footer';

export default function Home() {
    const heroSection = document.createElement('section');

    heroSection.classList.add('hero');
    heroSection.innerHTML = `
        ${hero().outerHTML}
        ${createDivider('left-aligned').outerHTML}

        <section>
            <img src="/images/home_02.webp" alt="Home mission">
        </section>
    `;

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${heroSection.outerHTML}
        ${HomeProducts().outerHTML}
        ${Footer().outerHTML}
    `;
}
