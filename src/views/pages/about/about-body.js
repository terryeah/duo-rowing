export default function AboutBody() {
    const section = document.createElement('section');

    section.className = 'about-body';
    section.innerHTML = `
        <div class="about-container">
            <div class="about-contentsbox">
                <div class="text-wrapper">
                    <h1>ABOUT</h1>
                    <div class="about-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.</p>
                    </div>
                </div>
                <div class="image-wrapper">
                    <img src="/images/about_01.webp" alt="About">
                </div>
            </div>
        </div>
 
    `
    return section;
}