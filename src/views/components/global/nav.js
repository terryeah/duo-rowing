export default function Nav() {
    const nav = document.createElement('nav');
    nav.className = 'nav';
    nav.classList.add('d-none');
    nav.innerHTML = `
        <ul>
            <li><a href="/product" onclick="event.preventDefault(); navigateTo('/product')">Product</a></li>
            <li><a href="/about" onclick="event.preventDefault(); navigateTo('/about')">About</a></li>
            <li><a href="/contact" navigateTo('/contact')">Contact</a></li>
        </ul>
    `;

    return nav;
}
