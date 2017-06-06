angular.module('video-player')
.controller('VideoCtrl', function($scope) {
  // console.log($scope);
})
.component('app', {
  
  transclude: true,
  templateUrl: '../src/templates/app.html',
  controller: function() {
    this.videos = exampleVideoData;
    // console.log('videoListProp', this.videoListProp);
  }
});
