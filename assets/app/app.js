

var applicacion = angular.module('prueba', ['ui.router','ngAnimate','ngResource','toastr']);

applicacion.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise("/vista1");

  $stateProvider
    .state('home',{
      url: "/home",
      templateUrl: "rutas/home.html",
      controller: 'homeController'
    })
    .state('usuario',{
      url: "/usuario",
      templateUrl: "rutas/usuario.html",
      controller: 'usuarioController'
    })
    .state('pastel',{
      url: "/pastel/:idUsuario",
      templateUrl: "rutas/pastel.html",
      controller: 'pastelController'
    });
});
