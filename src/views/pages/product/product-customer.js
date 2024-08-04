export default function ProductCustomer() {
    const section = document.createElement('section');

    section.className = 'product-customer';
    section.innerHTML = `
            <img src="/images/product_01.webp" alt="Product Customer">
            <div class="customer-contentsbox">
                <div class="testimonial-box">
                    <p>Our Customer</p>
                    <div class="customer-textbox">
                        <div class="textbox-line"></div>
                        <div class="textbox-title">
                            <p>Something go here</p>
                        </div>
                    </div>    
                </div>
            </div>
 
    `
    return section;
}