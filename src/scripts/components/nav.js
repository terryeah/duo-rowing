export function initialiseNav() {
    const mobileMenu = document.querySelector('header .mobile-menu');
    const nav = document.querySelector('nav');
    const mobileMenuIcon = document.querySelector('header .mobile-menu-icon'); 

    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle('d-none');
        });
    }

    if (window.location.pathname === '/about') { 
        if (mobileMenuIcon) {
            mobileMenuIcon.querySelectorAll('circle').forEach(circle => {
                circle.setAttribute('stroke', 'white');
            });
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialiseNav);
} else {
    initialiseNav();
}
