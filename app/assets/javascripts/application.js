window.onLoad = function() {
  navScroll();
}

window.addEventListener('scroll', navScroll);

function navScroll() {
  var scrollTop = window.pageYOffset;
  var main_nav = document.getElementById('main-nav');
  var hasClass = /nav-fixed/g.test(main_nav.className)

  if(scrollTop >= 10 && !hasClass) {
    main_nav.className += ' nav-fixed';
  } else if(scrollTop < 10 && hasClass) {
    main_nav.className = main_nav.className.replace(/nav-fixed/g, '');
  }
}
