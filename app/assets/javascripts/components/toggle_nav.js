function toggleNav(id) {
  var el = document.getElementById(id);
  var hasClass = _u.hasClass(el, 'nav-bar-open');

  if(hasClass) {
    _u.removeClass(el, 'nav-bar-open');
    _u.addClass(el, 'nav-bar-hide');
  } else {
    _u.removeClass(el, 'nav-bar-hide');
    _u.addClass(el, 'nav-bar-open');
  }
}
