export default function Productbody() {
    const section = document.createElement('section');

    section.className = 'product-body';
    section.innerHTML = `
        <div class="detail-container">
            <div class="detail-box">
                <div class="title">PRODUCT DESCRIPTION</div>
                <div class="text-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                </div>
            </div>

            <div class="detail-box">
                <div class="title">DETAIL</div>
                <div class="text-box">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                </div>
                <p>Download your free instruction guide.</p>
            </div>
        </div>

        <div class="detail-container">
            <div class="detail-box">
                <div class="title">PRICE</div>
                <div class="price-table">
                    <div class="price-row">
                        <div class="price-item">4 Wheels</div>
                        <div class="price-item">$35</div>
                    </div>
                    <div class="price-row">
                        <div class="price-item">8 Wheels</div>
                        <div class="price-item">$55</div>
                    </div>
                    <div class="price-row">
                        <div class="price-item">20 Wheels</div>
                        <div class="price-item">$130</div>
                    </div>
                    <div class="price-row">
                        <div class="price-item">30 Wheels</div>
                        <div class="price-item">$195</div>
                    </div>
                    <div class="price-row">
                        <div class="price-item">40 Wheels</div>
                        <div class="price-item">$260</div>
                    </div>
                    <div class="price-row">
                        <div class="price-item">50 + Wheels</div>
                        <div class="price-item">$5 / wheel</div>
                    </div>
                </div>
            </div>

            <div class="detail-box">
                <div class="title">RETURNS + REFUNDS</div>
                <div class="text-box">
                    <p>Duo Rowing will accept product returns and provide you with a refund or exchange where:</p>
                    <ul>
                        <li>The product is faulty or is not of merchantable quality, or</li>
                        <li>The product is not fit for its intended purpose, or</li>
                        <li>The product does not match the sample or our description; and</li>
                        <li>You can produce your receipt or other adequate proof of purchase</li>
                    </ul>
                </div>
                <p>Read More</p>
            </div>
        </div>
    `

    return section;
}