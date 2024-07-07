import { pageRouter } from './page-router';
import { componentRouter } from './component-router';

export function navigateTo(url) {
    history.pushState(null, null, url);
    pageRouter();
    componentRouter();
}
