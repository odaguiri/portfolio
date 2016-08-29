window.onLoad = function() {
  navScroll();
}

window.addEventListener('scroll', navScroll);

function navScroll() {
  var scrollTop = window.pageYOffset;
  var main_nav = document.getElementById('main-nav');
  var hasClass = _u.hasClass(main_nav, 'nav-fixed');

  if(scrollTop >= 10 && !hasClass) {
    _u.addClass(main_nav, 'nav-fixed');
  } else if(scrollTop < 10 && hasClass) {
    _u.removeClass(main_nav, 'nav-fixed');
  }
}

function toggleNav(id) {
  var el = document.getElementById(id);
  var hasClass = _u.hasClass(el, 'nav-bar-open');

  if(hasClass) {
    _u.removeClass(el, 'nav-bar-open');
    _u.addClass(el, 'nav-bar-open');
  } else {
    _u.removeClass(el, 'nav-bar-hide');
    _u.addClass(el, 'nav-bar-open');
  }
}

var _u = (function(window) {
  var addClass = function(el, klass) {
    el.className += ' ' + klass;
  }

  var removeClass = function(el, klass) {
    el.className = el.className.replace(new RegExp(' ' + klass, 'g'), '');
  }

  var hasClass = function(el, klass) {
    return (new RegExp(klass, 'g')).test(el.className)
  }

  return {
    removeClass: removeClass,
    addClass: addClass,
    hasClass: hasClass
  }
})(window);
