angular.module('video-player')
.component('app', {

  templateUrl: '../src/templates/app.html',

  controller: function() {
    // console.log('inside app, ', exampleVideoData); 
    this.videos = exampleVideoData;
    this.currentvideo = exampleVideoData[0];

    this.clickListEntry = (video) => {
      console.log('pass', video);
      this.currentvideo = video;
      // console.log(this.currentvideo);
    };
  }

});
