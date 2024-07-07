export default function Hero() {
    const heroDiv = document.createElement('div');
    const heroImg = document.createElement('img');

    heroDiv.className = 'image-wrapper';
    heroImg.className = 'hero-image';
    heroImg.src = '/images/duo-large.webp';
    heroImg.alt = 'Hero Image';

    heroDiv.appendChild(heroImg);

    return heroDiv;
}
