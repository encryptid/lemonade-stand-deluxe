const app = angular.module('LemonadeStandApp', ['ui.router']);

// const controllers = [
//     require('./controllers/dashboard'),
//     // require('./controllers/*'),
//     // require('./controllers/*'),
// ];

// for (let i = 0; i < controllers.length; i++) {
//     app.controller(controllers[i].name, controllers[i].func);
// }

// app.config(function($stateProvider){

// })

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
// const controllers = [
//     require('./controllers/submit'),
// ]

// for (let i = 0; i < controllers.length; i++) {
//     app.controller(controllers[i].name, controllers[i].func);
// };
app.controller(Submit.name, Submit.func);


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