angular.module('app')
  .controller('ChampionnatController', function($scope, ChampionnatService) {

    ChampionnatService.getAll().then(function(res) {
      $scope.titres = res.data;
    });

    $scope.addtitreL1 = function() {
      $scope.titres = [];
      let titre = {
        equipe: $scope.equipe,
        dates: $scope.dates
      };
      ChampionnatService.create(titre).then(function(res) {
        console.log(titre, res);
        $scope.equipe = '';
        $scope.dates = '';
        ChampionnatService.getAll().then(function(res) {
          $scope.titres = res.data;
        });
      }, function(err) {
        console.log('echec');
      });
    };
    $scope.addtitreL2 = function() {
      $scope.ligues2 = [];
      let ligue2 = {
        equipe: $scope.ligue2Equipe,
        dates: $scope.ligue2Dates
      };
      ChampionnatService.create(ligue2).then(function(res) {
        console.log(ligue2, res);
        $scope.ligue2Equipe = '';
        $scope.ligue2Dates = '';
        ChampionnatService.getAll().then(function(res) {
          $scope.ligues2 = res.data;
        });
      }, function(err) {
        console.log('echec');
      });
    };
  });
