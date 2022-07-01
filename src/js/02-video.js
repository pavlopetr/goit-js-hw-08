import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const TIME_POINT_KEY = 'videoplayer-current-time';

const setCurrentTimeVideo = e => {
  const stringifyData = JSON.stringify(e);

  localStorage.setItem(TIME_POINT_KEY, stringifyData);
};

const savedTimeVideo = () => {
  const savedDataTime = localStorage.getItem(TIME_POINT_KEY);
  const parsedDataTime = JSON.parse(savedDataTime) ?? {};

  if (savedDataTime) {
    player.setCurrentTime(parsedDataTime.seconds);
  }
};

savedTimeVideo();
player.on('timeupdate', throttle(setCurrentTimeVideo, 1000));


