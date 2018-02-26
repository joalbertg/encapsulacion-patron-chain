(function(window, document) {
  var x = 0;
  var objeto = {
    getX: function() {
      return x;
    },
    incrementar: function() {
      x++;
      return this;
    }
  };

  if (typeof window.objeto === 'undefined') {
    window.objeto = window.$ = objeto;
  } else {
    console.log('Librería ya definida.');
  }
})(window, document);
