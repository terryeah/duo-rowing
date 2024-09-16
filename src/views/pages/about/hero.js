// about/hero.js
export default function Hero() {
    const aboutHero = document.createElement('section'); // Use <section> for semantics
    aboutHero.className = 'hero-container'; // Add class for consistent styling

    // Add a container with an image inside it
    aboutHero.innerHTML = `
            <div class="container">
                <img src="/images/about_01_large.webp" alt="About Image" />
            </div>
        `;

    return aboutHero;
}
