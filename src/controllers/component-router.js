import Header from '../views/components/global/header';
import Nav from '../views/components/global/nav';
import Footer from '../views/components/global/footer';

export function componentRouter() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');

    if (header) {
        header.innerHTML = Header();
    }
    if (nav) {
        nav.innerHTML = Nav();
    }
    if (footer) {
        footer.innerHTML = Footer();
    }
}
