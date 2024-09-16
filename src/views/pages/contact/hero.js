//contact/hero.js
export default function Hero() {
    const contactHero = document.createElement('section'); 
    contactHero.className = 'hero-container'; 

    contactHero.innerHTML = `
        <div class="container">
            <h1>CONTACT</h1>
        </div>
    `;

    return contactHero;
}
