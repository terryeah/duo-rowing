// about/index.js
import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import Hero from './hero';  // Use updated Hero function
import createDivider from '../../components/global/divider';
import Footer from '../../components/global/footer';
import AboutBody from './about-body';

export default function About() {
    const aboutPage = document.createElement('main'); // Use <main> instead of <div>

    // Hero section directly under main
    aboutPage.innerHTML = `
        <article class="about-body">
        ${AboutBody().outerHTML}
        </article>
        ${createDivider('right-aligned').outerHTML}
    `;

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${aboutPage.outerHTML}
        ${Footer().outerHTML}
    `;
}

