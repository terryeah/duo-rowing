export function Nav() {
    return `
        <ul>
            <li><a href="/home" onclick="event.preventDefault(); navigateTo('/home')">Home</a></li>
            <li><a href="/product" onclick="event.preventDefault(); navigateTo('/product')">Product</a></li>
            <li><a href="/about" onclick="event.preventDefault(); navigateTo('/about')">About</a></li>
            <li><a href="/contact" onclick="event.preventDefault(); navigateTo('/contact')">Contact</a></li>
        </ul>
    `;
}
