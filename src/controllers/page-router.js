import { Home } from '../views/pages/home';
import { Product } from '../views/pages/product';
import { About } from '../views/pages/about';
import { Contact } from '../views/pages/contact';

export function pageRouter() {
    const path = window.location.pathname;
    const app = document.querySelector('.app');

    if (path === '/home' || path === '/') {
        document.title = 'Duo Rowing';
        app.innerHTML = Home();
    } else if (path === '/product') {
        document.title = 'Product - Wheels';
        app.innerHTML = Product();
    } else if (path === '/about') {
        document.title = 'About Us';
        app.innerHTML = About();
    } else if (path === '/contact') {
        document.title = 'Contact Us';
        app.innerHTML = Contact();
    } else {
        app.innerHTML = Home();
    }
}

export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}
