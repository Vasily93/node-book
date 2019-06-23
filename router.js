function route(handle, pathname) {
    console.log('About to route a sequest for' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname]();
    } else {
        console.log('no request handler found for' + pathname);
    }
}

exports.route = route;