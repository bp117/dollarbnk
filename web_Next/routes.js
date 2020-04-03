const routes = module.exports = require('next-routes')();

routes
    .add('panel/cards', '/panel/:slug/:accId/:changeId', 'panel')
    .add('panel/accounts', '/panel/:slug/:accId', 'panel')
    .add('panel/transfers', '/panel/:slug/:accId', 'panel')
    .add('panel/profile', '/panel/:slug', 'panel')
    .add('panel/change-details', '/panel/:slug', 'panel')
    .add('panel/messages', '/panel/:slug/:accId', 'panel')
    .add('panel/help', '/panel/:slug', 'panel')
    .add({name: 'beta', pattern: '/v3', page: 'v3'});


