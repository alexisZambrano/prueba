applicacion.controller('usuarioController',['$scope','toastr','UsuarioFactory',function($scope,toastr,UsuarioFactory){
    console.log('Entraste a usuario');
    toastr.success('succes','entraste a usuario');



    $scope. nuevoUsuario = {
        nombre:'',
        apellido:'',
        edad:'',
        correo:'',
        ciudad:'',
        foto:''
    }


    $scope.agregarNuevoUsuario = function(){

        UsuarioFactory.save({
            nombre: $scope.nuevoUsuario.nombre,
            apellido: $scope.nuevoUsuario.apellido,
            edad: $scope.nuevoUsuario.edad,
            correo: $scope.nuevoUsuario.correo,
            ciudad: $scope.nuevoUsuario.ciudad,
            foto: $scope.nuevoUsuario.foto
        })
        .$promise.then(
        function correctoLlamoUsuario(respuesta){
            console.log(respuesta);
            //$scope.entrenadores.push(respuesta.data);
            //$scope.usuarios.push(respuesta);
            $scope. nuevoUsuario = {
                                        nombre:'',
                                        apellido:'',
                                        edad:'',
                                        correo:'',
                                        ciudad:'',
                                        foto:''
                                    };
        },
        function errorNoLlamoUsuarios(error){
            console.log(error);
        });
    }

    UsuarioFactory.query().$promise.then(
      function success(respuesta){
      console.log(respuesta);
      $scope.usuarios=respuesta;
    },
    function errorNoLlamoUsuarios(error){
        console.log(error);
    });
}]);
