import { Header } from '../views/components/header';
import { Nav } from '../views/components/nav';

export function componentRouter() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    if (header) {
        header.innerHTML = Header();
    }
    if (nav) {
        nav.innerHTML = Nav();
    }
}
