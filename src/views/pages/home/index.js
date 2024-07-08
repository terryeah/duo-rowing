import hero from './hero';
import divider from '../../components/global/divider';

export default function Home() {
    const heroSection = document.createElement('section');

    heroSection.classList.add('hero');
    heroSection.innerHTML = `
        ${hero().outerHTML}
        ${divider()}
    `;

    return heroSection.outerHTML;
}
