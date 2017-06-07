angular.module('video-player')
.component('videoList', {

  templateUrl: '../src/templates/videoList.html',

  bindings: {
    videos: '<',
    clickEvent: '<',
  },
  controller: function() {
    // this.clickEvent =
    // console.log('inside videoList, ', $scope);
    
  }
});