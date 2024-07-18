import './styles/duo-rowing.scss';
import { navigateTo } from './controllers/router';
import { pageRouter } from './controllers/page-router';
import { initialiseNav } from './scripts/components/nav';

document.addEventListener('DOMContentLoaded', () => {
    pageRouter();
    window.navigateTo = navigateTo;

    import('./scripts/duo-rowing.js');
});

window.addEventListener('popstate', () => {
    pageRouter();
    initialiseNav();
});
