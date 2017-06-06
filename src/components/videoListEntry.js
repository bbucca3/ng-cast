angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    clickEvent: '<',
  },
  templateUrl: '../src/templates/videoListEntry.html',
  controller: function() {
    console.log('inside VideoListEntry: ', this);
    this.clickTitle = () => {
      this.currentVideo = this.video;
    };
  }
  
});
