import hero from './hero';
import createDivider from '../../components/global/divider';

export default function Home() {
    const heroSection = document.createElement('section');

    heroSection.classList.add('hero');

    heroSection.innerHTML = `
        ${hero().outerHTML}
        ${createDivider('left-aligned').outerHTML}

        <section>
            <div>
                <h3>Home message test</3>
            </div>
        </section>
    `;

    return heroSection.outerHTML;
}
