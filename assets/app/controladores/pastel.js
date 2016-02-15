applicacion.controller('pastelController',['$scope','toastr','PastelFactory','UsuarioFactory','$stateParams',function($scope,toastr,PastelFactory,UsuarioFactory,$stateParams){
    console.log('Entraste a pastel');
    toastr.success('succes','entraste a pastel');


    $scope. nuevoPastel = {
        nombre:'',
        tipo:'',
        foto:'',
        preparcion:''
    }


    PastelFactory.buscarporIdUsuario({
                idUsuario: $stateParams.idUsuario
            }).$promise.then(
                function success(respuesta) {
                    $scope.pasteles = respuesta;
                    console.log(respuesta);
                },
                function error(error) {
                    console.log(error);
                });
    UsuarioFactory.get({
          id: $stateParams.idUsuario
      }).$promise.then(
          function success(respuesta) {
              $scope.usuario = respuesta;
              console.log($scope.usuario);
          },
          function error(error) {
              console.log(error);
          });


    $scope.agregarNuevoPastel = function(){

        PastelFactory.save({
            nombre: $scope.nuevoPastel.nombre,
            tipo: $scope.nuevoPastel.tipo,
            foto: $scope.nuevoPastel.foto,
            preparacion: $scope.nuevoPastel.preparacion,
            idUsuario: $stateParams.idUsuario
        })
        .$promise.then(
        function correctoLlamoPastel(respuesta){
            console.log(respuesta);
            //$scope.entrenadores.push(respuesta.data);
            //$scope.usuarios.push(respuesta);
            $scope. nuevoPastel = {
              nombre:'',
              tipo:'',
              foto:'',
              preparcion:''
            };
        },
        function errorNoLlamoPastel(error){
            console.log(error);
        });
      }
  }]);
