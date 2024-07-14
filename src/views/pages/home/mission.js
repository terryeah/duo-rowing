export default function Mission() {
    const section = document.createElement('section');

    section.className = 'mission';
    section.innerHTML = `
        <img src="/images/home_02.webp" alt="Home mission">
    `;

    return section;
}