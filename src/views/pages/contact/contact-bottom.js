export default function Contactbottom() {
    const section = document.createElement('section');

    section.className = 'contact-bottom';
    section.innerHTML = `
        <div class="image-container">
            <img src="/images/product_01.webp" alt="Product Customer">
        </div>
    `
    return section;
}