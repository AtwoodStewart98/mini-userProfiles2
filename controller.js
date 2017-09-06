angular
  .module("userProfiles")
  .controller("MainController", function($scope, mainService) {
    $scope.getUsers = function() {
      mainService.getUsers().then(function(resp) {
        console.log(resp);
        $scope.users = resp;
      });
    };

    $scope.getUsers();
  });
