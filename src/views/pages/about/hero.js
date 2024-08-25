export default function Hero() {
    //const aboutHero = document.createElement('div');
    //aboutHero.innerHTML = '<h1>ABOUT</h1>';
    //return aboutHero;

    const aboutDiv = document.createElement('div');
    const aboutImg = document.createElement('img');

    //heroDiv.className = 'image-wrapper';
    //heroImg.className = 'hero-image';
    aboutImg.src = '/images/about_01_large.webp';
    aboutImg.alt = 'About Image';

    aboutDiv.appendChild(aboutImg);

    return aboutDiv;
}