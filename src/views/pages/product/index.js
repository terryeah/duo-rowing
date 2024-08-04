import Header from '../../components/global/header';
import Nav from '../../components/global/nav';
import hero from './hero';
import Footer from '../../components/global/footer';
import createDivider from '../../components/global/divider';
import ProductDetail from './product-detail';
import Productbody from './product-body';
import ProductCustomer from './product-customer';

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
        ${ProductDetail().outerHTML}
        ${createDivider('left-aligned').outerHTML}
        ${Productbody().outerHTML}
        ${ProductCustomer().outerHTML}
        ${Footer().outerHTML}
    `;
}
