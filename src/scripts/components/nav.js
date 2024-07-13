export function initialiseNav() {
    const mobileMenu = document.querySelector('header .mobile-menu');
    const nav = document.querySelector('nav');

    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('d-none');
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiseNav);
} else {
    initialiseNav();
}
