'use strict';
test('displays a user after a click', () => {
    document.body.innerHTML =
  `<div>
  <video id="video-player" width="400" controls>
   <source src="mov_bbb.mp4" type="video/mp4">
  <source src="mov_bbb.ogg" type="video/ogg">
  </video>
  </div>`;

  const videoPlayer = document.getElementById('video-player')
  function playVideo(callback){
    callback(videoPlayer.play())
  }
  const onClick= jest.fn();
  playVideo(onClick);
  expect(onClick).toHaveBeenCalled();
});