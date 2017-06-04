// Configuracion PopUp, nazz.me/simple-jquery-popup
(function($) {
  $.fn.simplePopup = function() {

    var simplePopup = {

      // Inicializa las variables
      initialize: function(self) {

        var popup = $(".js__popup");
        var body = $(".js__p_body");
        var close = $(".js__p_close");
        var hash = "#popup";

        var string = self[0].className;
        var name = string.replace("js__p_", "");

        // Abreb el popUp
        if ( !(name === "start") ) {
          name = name.replace("_start", "_popup");
          popup = $(".js__" + name);
          name = name.replace("_", "-");
          hash = "#" + name;
        };

        // Evento click
        self.on("click", function() {
          simplePopup.show(popup, body, hash);
          return false;
        });

        $(window).on("load", function() {
          simplePopup.hash(popup, body, hash);
        });

        // Cierra el popUp
        body.on("click", function() {
          simplePopup.hide(popup, body);
        });

        close.on("click", function() {
          simplePopup.hide(popup, body);
          return false;
        });

        // Cierra el popUp al presionar el boton esc
        $(window).keyup(function(e) {
          if (e.keyCode === 27) {
            simplePopup.hide(popup, body);
          }
        });

      },

      // Centra el popUp
      centering: function(self) {
        var marginLeft = -self.width()/2;
        return self.css("margin-left", marginLeft);
      },

      // Visualizacion general del popUp
      show: function(popup, body, hash) {
        simplePopup.centering(popup);
        body.removeClass("js__fadeout");
        popup.removeClass("js__slide_top");
        window.location.hash = hash;
      },

      // Funcion general para cerrar el popUp
      hide: function(popup, body) {
        popup.addClass("js__slide_top");
        body.addClass("js__fadeout");
        window.location.hash = "#";
      },

      // Abre el popUp
      hash: function(popup, body, hash) {
        if (window.location.hash === hash) {
          simplePopup.show(popup, body, hash);
        }
      }

    };

    // Inicializa el popUp
    return this.each(function() {
      var self = $(this);
      simplePopup.initialize(self);
    });

  };
})(jQuery);