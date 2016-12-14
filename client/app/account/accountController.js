angular.module('at.account', [])

  .controller('AccountController', function ($scope, $window, $location, Application) {

    $scope.myAccount = {};

    $scope.getUserData = () => {
      Application.getUserData()
        .then((resp) => {

        })

    }

    $scope.getUserData();

});
