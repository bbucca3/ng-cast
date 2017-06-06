angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentvideo: '<',
    clickListEntry: '<',
  },
  templateUrl: '../src/templates/videoPlayer.html',
  controller: function() {
    this.generateUrl = () => {
      return 'https://www.youtube.com/embed/' + this.currentvideo.id.videoId;
    };
  }
});
