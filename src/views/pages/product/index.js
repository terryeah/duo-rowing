import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import Footer from '../../components/global/footer';

export default function Product() {
    const productPage = document.createElement('div');

    productPage.innerHTML = `
        <section class="hero">
            ${hero().outerHTML}
        </section>
        <!-- Other home page content -->
    `;

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${productPage.outerHTML}
        ${Footer().outerHTML}
    `;
}
