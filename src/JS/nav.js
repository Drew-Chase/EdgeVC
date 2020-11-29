const $ = require('jquery')
window.load = LoadView();
function ToggleNavigation() {
    const nav = $('#nav');
    const collapsed = nav.hasClass('navigation-collapsed');
    nav.addClass(collapsed ? "navigation-expanded" : "navigation-collapsed")
    nav.removeClass(collapsed ? "navigation-collapsed" : "navigation-expanded")
}


function LoadView(url = 'home') {
    const view = $('#main');
    url = url.toLowerCase();
    view.empty();
    switch (url) {
        case 'home':
            view.load("pages/home.html");
            break;
        case 'workspace':
            view.load("pages/workspace.html");
            break;
        case 'settings':
            view.load("pages/settings.html");
            break;
        default:
            LoadView();
            break;
    }
}