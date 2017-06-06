angular.module('video-player')
.controller('VideoCtrl', function($scope) {
  $scope.myVideosList = exampleVideoData;
  console.log($scope);

})
.component('videoList', {
  transclude: true,
  templateUrl: '../src/templates/videoList.html',
  bindings: {
    videoListProp: '<'
  },
  controller: function($scope) {
    
  }
});