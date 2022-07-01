import throttle from 'lodash.throttle';

import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const TIME_POINT_KEY = 'videoplayer-current-time';

const currentTimeVideo = e => {
  const stringifyData = JSON.stringify(e);

  localStorage.setItem(TIME_POINT_KEY, stringifyData);
};

const savedTimeVideo = () => {
  const savedDataTime = localStorage.getItem(TIME_POINT_KEY);
  const parsDataTime = JSON.parse(savedDataTime) ?? {};

  if (savedDataTime) {
    player.currentTime(parsDataTime.seconds);
  }
};

savedTimeVideo();
player.on('timeupdate', throttle(currentTimeVideo, 1000));
