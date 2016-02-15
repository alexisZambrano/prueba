applicacion.controller('homeController',['$scope','toastr','HomeFactory',function($scope,toastr,HomeFactory){
    console.log('Entraste a home');
    toastr.success('succes','entraste a home');

    $scope.editarUsuario = function (usuario, indice){
        console.log(usuario);
        console.log(indice);
        HomeFactory.actualizar(
            {
                idUsuario: usuario.id
            },
            {
                nombre: usuario.nombre,
                apellido: usuario.apellido,
            }).$promise.then(
                function correctoLlamoEntrenadores(respuesta){
                    console.log(respuesta);
                    //$scope.usuarios[indice].nombre=nombre;
                },
                function errorNoLlamoEntrenadores(error){
                    console.log(error);
                });
    };






    HomeFactory.query().$promise.then(
      function success(respuesta){
      console.log(respuesta);
      $scope.usuarios=respuesta;
    },
    function errorNoLlamoUsuarios(error){
        console.log(error);
    });


}]);
