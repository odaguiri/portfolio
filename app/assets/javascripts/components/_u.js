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
