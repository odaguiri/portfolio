function closeNav(id) {
  var el = document.getElementById(id);
  
  _u.removeClass(el, 'nav-bar-open');
  _u.addClass(el, 'nav-bar-hide');
}
