export default function Mission() {
    const section = document.createElement('section');

    section.className = 'home-mission';
    section.innerHTML = `
        <img src="/images/home_02.webp" alt="Home mission">
        
        <div class="image-describer product-description">
            <p>Mission</p>
            <div>
                <p>Lorem ipsum dolor sit amet, <br>
                consectetur adipiscing elit, sed <br>
                do eiusmod tempor incididunt.</p>
                <p>
                Lorem ipsum dolor sit amet, <br>
                consectetur adipiscing elit, sed do eiusmod <br>
                tempor incididunt ut labore et dolore magna aliqua. <br>
                Ut enim ad minim veniam, quis nostrud exercitation <br>
                ullamco laboris nisi ut aliquip ex ea commodo consequat.<br>
                 Duis aute irure dolor in reprehenderit in voluptate <br>
                 velit esse cillum dolore eu fugiat nulla pariatur. <br>
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                </p>
            </div>
            <p>Find out more</p>
        </div>
    `;

    return section;
}