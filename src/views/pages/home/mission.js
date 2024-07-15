export default function Mission() {
    const section = document.createElement('section');

    section.className = 'home-mission';
    section.innerHTML = `
        <div class="mission-container">
            <img src="/images/home_02.webp" alt="Home mission">
            <div class="mission-contentsbox">
            <div class="mission-box">
                <div>Mission</div>
                <div>
                    <div class="mission-textbox">
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
                    <div class="mission-button">Find out more</div>
                </div>
            
            </div>
            </div>
        </div>    
    `;

    return section;
}