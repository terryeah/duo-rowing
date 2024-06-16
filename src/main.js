import { navigateTo } from './controllers/router';
import { pageRouter } from './controllers/page-router';
import { componentRouter } from './controllers/component-router';

document.addEventListener('DOMContentLoaded', () => {
    pageRouter();
    componentRouter();
    window.navigateTo = navigateTo;

    import('./scripts/duo-rowing.js');
});

window.addEventListener('popstate', () => {
    pageRouter();
    componentRouter();
});
