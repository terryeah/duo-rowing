import { pageRouter } from './page-router';

export function navigateTo(url) {
    history.pushState(null, null, url);
    pageRouter();
}
