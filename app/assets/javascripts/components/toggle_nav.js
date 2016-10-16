function toggleNav(id) {
  var el = document.getElementById(id);
  var klasses = ['nav-bar-open', 'nav-bar-hide'];

  if(!_u.hasClass(el, 'nav-bar-open')) { klasses.reverse(); }

  _u.removeClass(el, klasses[0]);
  _u.addClass(el, klasses[1])
}
