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

var Initialize = (function(window, document){
  // lazy component setter
  function allElements(){
    var i;
    var elements = document.querySelectorAll('[data-component]');
    for (i = 0; i < elements.length; i++){
      element(elements[i]);
    }
  }

  function element(el){
    var components = el.getAttribute('data-component').split(' ');

    for(var n=0; n < components.length; n++){
      try {
        new (eval(components[n]))(el);
      } catch(error) {
        console.warn("initialize.js::warn " + error);
      }
    }
  }

  return {
    element: element,
    allElements: allElements
  };
})(window, document);

function closeNav(id) {
  var el = document.getElementById(id);
  
  _u.removeClass(el, 'nav-bar-open');
  _u.addClass(el, 'nav-bar-hide');
}

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

function toggleNav(id) {
  var el = document.getElementById(id);
  var klasses = ['nav-bar-open', 'nav-bar-hide'];

  if(!_u.hasClass(el, 'nav-bar-open')) { klasses.reverse(); }

  _u.removeClass(el, klasses[0]);
  _u.addClass(el, klasses[1])
}

window.load = Initialize.allElements();
