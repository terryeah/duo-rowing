export default function ProductDetail() {
    const section = document.createElement('section');

    section.className = 'product-detail';
    section.innerHTML = `
        <div>
            <div class="hero-title">PRODUCT DETAILS</div>
            <div class="hero-textbox">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                </p>
            </div>
        </div>

        <div class="components-box">

        </div>
    `

    return section;
}
