const buttonType = Object.freeze({
  submit: { icon: 'play_circle', isSubmit: true },
  play: { icon: 'play_circle_outline' },
  pause: { icon: 'pause_circle_outline' },
  remove: { icon: 'remove_circle_outline' },
});

const decorationType = Object.freeze({
  margin: '',
  color: 'green',
});

export { buttonType, decorationType };
