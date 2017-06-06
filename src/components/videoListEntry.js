angular.module('video-player')
// .controller('VideoCtrl', function($scope) {
//   console.log($scope);
// })
.component('videoListEntry', {
  
  transclude: true,
  templateUrl: '../src/templates/videoListEntry.html',
  controller: function() {
    this.videoListProp = exampleVideoData;
    // console.log(this.videoListProp);
  }
  
});
