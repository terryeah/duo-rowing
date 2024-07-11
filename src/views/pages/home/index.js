import hero from './hero';
import createDivider from '../../components/global/divider';

export default function Home() {
    const heroSection = document.createElement('section');

    heroSection.classList.add('hero');

    /*heroSection.innerHTML = `
        ${hero().outerHTML}
        ${createDivider('left-aligned').outerHTML}
    `;*/

    const heroComponent = Hero();
    const dividerComponent = createDivider('left-aligned');

    heroSection.appendChild(heroComponent);
    heroSection.appendChild(dividerComponent);

    const homeBody = document.createElement('section');
    homeBody.innerHTML = `
        <h1>Insert head on home</h1>
    `;

    heroSection.appendChild(homeBody);
    return heroSection;

    /*return heroSection.outerHTML;*/
}
