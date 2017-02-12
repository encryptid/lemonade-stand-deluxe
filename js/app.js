const app = angular.module('LemonadeStandApp', ['ui.router']);

// const controllers = [
//     require('./controllers/dashboard'),
//     // require('./controllers/*'),
//     // require('./controllers/*'),
// ];

// for (let i = 0; i < controllers.length; i++) {
//     app.controller(controllers[i].name, controllers[i].func);
// }

const Stand = require('./services/stand');

// const services = [
//     require('./services/stand'),
// ]

// for (let i = 0; i < services.length; i++) {
//     app.factory(services[i].name, services[i].func);
// };

// const Resources = require('./controllers/ResourceMgmt');
// const Stock = require('./services/stock');

// app.config(function($StateProvider) {
//     $stateProvider.state({
//         name: 'list-em-all',
//         url: '/list',
//         component: 'friendList',
//     })
// })

const Submit = require('./controllers/submit');
const Game = require('./controllers/game');
const Details = require('./components/gameDetails');
// const controllers = [
//     require('./controllers/submit'),
// ]

// for (let i = 0; i < controllers.length; i++) {
//     app.controller(controllers[i].name, controllers[i].func);
// };
//app.component()
app.config(function($stateProvider) {
    $stateProvider.state({
        name: 'game-page',
        url: '/main',
        component: 'gameDetails',
    })
})

app.controller(Submit.name, Submit.func);
app.controller(Game.name, Game.func);

app.component(Details.name, Details.object);

//app.controller(Resources.name, Resources.func);

// app.component('statsSection', {
//     templateUrl: 'templates/statsSection.html',
//     controller: 'Dashboard',
// });

// app.component('resourceMgmt', {
//     templateUrl:'templates/resourceMgmt.html',
//     controller: 'ResourceMgmt',
// });

app.factory(Stand.name, Stand.func);

// app.factory(Stock.name, Stock.func);