angular.module('video-player')
.component('app', {

  templateUrl: '../src/templates/app.html',

  controller: function() {
    // console.log('inside app, ', exampleVideoData); 
    this.videos = exampleVideoData;
  }

});
