export default function HomeProducts() {
    const section = document.createElement('section');

    section.className = 'home-products';
    section.innerHTML = `
        <div>
            <div>Products</div>
            <div>
                <div>
                    <div class="product-textbox">
                        <div class="textbox-line"></div>
                        <div class="textbox-title">
                            Lorem ipsum dolor sit amet, <br>
                            consectetur adipiscing elit, sed <br>
                            do eiusmod tempor incididunt.
                        </div>

                        <p class="textbox-text">
                        Lorem ipsum dolor sit amet, <br>
                        consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation <br>
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>
                        Duis aute irure dolor in reprehenderit in voluptate <br>
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                        Excepteur sint occaecat
                        </p>
                    </div>
                    <div class="product-button">Find out more</div>
                </div>
            </div>
        </div>
        <div>
            <img src="/images/home_01.webp" alt="Home products" width="485" height="458" />
        </div>
    `

    return section;
}
