const setRoute = route => {
    const navCurrentRoute = document.getElementById('nav-current-route');
    navCurrentRoute.innerHTML = route;
}

const search = value => {
    if (value) window.location.href = '/?search=' + value;
    else window.location.href = '/';
}

const setupSearch = () => {
    const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('keypress', e => {
        e = e ? e : window.event;
        const keyCode = e.code || e.key;
        if (keyCode === 'Enter') search(e.target.value);
    });

    const searchIcon = document.querySelector('.search-box-wrapper i');
    searchIcon.addEventListener('click', () => {
        const value = searchBox.value;
        search(value);
    })
}

const main = () => {
    const path = window.location.pathname;
    const search = getURLParam('search');

    switch (path) {
        case '/':
            setRoute('<a href="/">Home</a>');
            if (search) loadProducts(search);
            else loadProducts();
            break;
        case '/wishlist':
            setRoute('<a href="/">Home</a> > <a href="/wishlist">Lista de Desejos</a>');
            const userId = '123';
            loadWishlist(userId);
            document.querySelector('#linkWishlist i').style.color = 'red';
            break;
        default:
            alert('Oops');
            break;
    }

    setupSearch();
}

window.onload = main;
