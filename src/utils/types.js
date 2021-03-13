const buttonType = Object.freeze({
  submit: { icon: 'play_circle', isSubmit: true },
  play: { icon: 'play_circle_outline' },
  pause: { icon: 'pause_circle_outline' },
  remove: { icon: 'remove_circle_outline' },
});

const trackerType = Object.freeze({
  title: '', start: null, isPlay: true, intervals: [],
});

export { buttonType, trackerType };
