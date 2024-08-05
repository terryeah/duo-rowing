import Home from '../views/pages/home';
import Product from '../views/pages/product';
import About from '../views/pages/about';
import Contact from '../views/pages/contact';
import { initialiseNav } from '../scripts/components/nav';

export function router() {
    const path = window.location.pathname;
    const app = document.querySelector('.app');
    
    switch(path) {
        case '/':
        case '/home':
            document.title = 'Duo Rowing';
            app.innerHTML = Home();
            break;
        case '/product':
            document.title = 'Product - Wheels';
            app.innerHTML = Product();
            break;
        case '/about':
            document.title = 'About Us';
            app.innerHTML = About();
            break;
        case '/contact':
            document.title = 'Contact Us';
            app.innerHTML = Contact();
            break;
        default:
            document.title = 'Duo Rowing';
            app.innerHTML = Home();
    }
    
    initialiseNav();
}

export function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}
