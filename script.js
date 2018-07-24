(function() {
  function playSound(evt) {
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
    
    
    if (!audio) {
      return; // do nothing
    }
    audio.currentTime = 0;
    audio.play();
    
    key.classList.add('playing');
  }

  function removeTransition(evt) {
    if (evt.propertyName !== 'transform') {
      return;
    }

    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(function(key) {
    key.addEventListener('transitionend', removeTransition);
  });
  
  document.addEventListener('keyup', playSound);
})();
