import hero from './hero';

export default function Product() {
    const productPage = document.createElement('div');

    productPage.innerHTML = `
        <section class="hero">
            ${hero().outerHTML}
        </section>
        <!-- Other home page content -->
    `;

    return productPage.outerHTML;
}
