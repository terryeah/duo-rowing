//product/hero.js
export default function Hero() {
    const productHero = document.createElement('section'); // Use <section> for semantic structure
    productHero.className = 'hero-container'; // Add class for consistent styling
    
    productHero.innerHTML = `
        <div class="container">  <!-- This ensures max-width is used -->
            <h1>WHEELS</h1>
        </div>
    `;

    return productHero;
}
