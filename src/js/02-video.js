import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerElement = document.getElementById('vimeo-player');
const videoPlayer = new Player(playerElement);

const saveTime = localStorage.getItem('videoplayer-current-time');

if (saveTime) {
    videoPlayer.setCurrentTime(saveTime);
  }

  function handleTimeUpdate(evt) {
    const saveCurrentTime = evt.seconds;
    console.log(saveCurrentTime);
    localStorage.setItem('videoplayer-current-time', saveCurrentTime);

  }
  
  videoPlayer.on('timeupdate', throttle(handleTimeUpdate, 1000));

