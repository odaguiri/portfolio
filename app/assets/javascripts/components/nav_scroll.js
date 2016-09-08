function NavScroll(el) {
  this.el = el;
  window.addEventListener('scroll', this.listen.bind(this));
}

NavScroll.prototype.listen = function() {
  var scrollTop = window.pageYOffset;
  var hasClass = _u.hasClass(this.el, 'nav-fixed');

  if(scrollTop >= 10 && !hasClass) {
    _u.addClass(this.el, 'nav-fixed');
  } else if(scrollTop < 10 && hasClass) {
    _u.removeClass(this.el, 'nav-fixed');
  }
}
