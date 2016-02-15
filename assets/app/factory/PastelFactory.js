applicacion.factory('PastelFactory',['$resource',function($resource){

    var factory = $resource(
        'http://localhost:1337/Pastel/:idPastel',
    {
        idPastel:'@idPastel'
    },
         {
          actualizar:
            {
                method:'PUT',
                params:{
                    idPastel:'@idPastel'
                }
            },
            buscarporIdUsuario:
            {
              url: 'http://localhost:1337/Pastel?idUsuario=:idUsuario',
              method: 'GET',
              params:{
                idPastel: '@idPastel'
              },
              isArray: true
            }
         });

    return factory;

}]);
