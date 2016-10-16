function ScrollTransition(el) {
  var was_animate = false;

  window.addEventListener('scroll', function(){
    if(!was_animate &&
       window.pageYOffset >= (el.offsetTop - 350)) {

      was_animate = true;
      _u.addClass(el, 'fx');
    }
  });
}
