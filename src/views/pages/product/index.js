//product/index.js
import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import Hero from './hero'; 
import Footer from '../../components/global/footer';
import createDivider from '../../components/global/divider';
import ProductDetail from './product-detail';
import Productbody from './product-body';
import ProductCustomer from './product-customer';
import Testimonial from '../home/testimonial.js';

export default function Product() {
    const productPage = document.createElement('main');  // Use <main> instead of <div>

    // Hero section is now directly inside <main>
    productPage.innerHTML = `
        <section class="hero">
            ${Hero().outerHTML}  <!-- Use the Hero function -->
        </section>
        <article class="product-detail">
            ${ProductDetail().outerHTML}
        </article>
        ${createDivider('left-aligned').outerHTML}
        <section class="product-body">
            ${Productbody().outerHTML}
        </section>
        <section class="product-customer">
            ${ProductCustomer().outerHTML}
        </section>
        ${Testimonial().outerHTML}
        ${createDivider('right-aligned').outerHTML}
    `;

    return `
        ${Header().outerHTML}
        ${Nav().outerHTML}
        ${productPage.outerHTML}
        ${Footer().outerHTML}
    `;
}
