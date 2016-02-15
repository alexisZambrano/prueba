

applicacion.factory('UsuarioFactory', ['$resource', function ($resource) {

    var factory = $resource(
        'http://localhost:1337/usuario/:idUsuario',
        {
            idUsuario: '@idUsuario'
        },
        {
            actualizar: {
                method: 'PUT',
                params: {
                    idUsuario: '@idUsuario'
                }

            }
        });

    return factory;


}]);
