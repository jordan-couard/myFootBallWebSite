angular.module('app')
  .service('ChampionnatService', function($http) {
    return {
      create: function(titre) {
        return $http.post('/titres/', titre);
      },
      getAll: function() {
        return $http.get('/titres');
      }
    };
  });
