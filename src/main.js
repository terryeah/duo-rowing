import './styles/duo-rowing.scss';
import { router, navigateTo } from './controllers/router';

document.addEventListener('DOMContentLoaded', () => {
    router();
    window.navigateTo = navigateTo;
    import('./scripts/duo-rowing.js');
});

window.addEventListener('popstate', router);
