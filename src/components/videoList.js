angular.module('video-player')
.component('videoList', {

  templateUrl: '../src/templates/videoList.html',

  bindings: {
    videos: '<'
  },
  controller: function($scope) {
    //console.log($scope);
    console.log('inside videoList, ', $scope);
  }
});