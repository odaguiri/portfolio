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
