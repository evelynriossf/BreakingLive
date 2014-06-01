// angular.module('myApp').controller('GalleryCtrl', ['$scope', function($scope) {
//   $scope.assets = Asset.query({album: 'shortcut'});
// }]);

  angular.module('Test', ['chute']).controller('MainCtrl', ['$scope', 'Chute.API.Asset', function($scope, Asset) {
        $scope.assets = Asset.query({album: 'abcqsrlx', perPage: 3});
      }]);
    