function ScrollTransition(el) {
  var was_animate = false;

  window.addEventListener('scroll', function(){
    var pageYOffset = window.pageYOffset;

    if(
      !was_animate &&
      (
        pageYOffset >= (el.offsetTop - 350) ||
        pageYOffset >= (document.querySelector('.main-body').clientHeight - window.outerHeight)
      )
    ){
      was_animate = true;
      _u.addClass(el, 'fx');
    }
  });
}
