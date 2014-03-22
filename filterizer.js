/*
 * filterizer v1.0
 * http://github.com/masriamir/filterizer
 *
 * Copyright 2014 Amir Masri
 * Released under the MIT license
 */

(function( $ ) {

  $.fn.filterizer = function( options ) {

    var settings = $.extend({
      table: null,
      column: 0
    }, options );

    return this.each(function() {
      // if no table id is provided, use the first table in the DOM
      if (settings.table === null) {
        settings.table = $( 'table' ).attr( 'id' );
      }
      var $table = $( '#' + settings.table ).find( 'tbody tr' );
      $( this ).keyup(function() {
        var filter = $( this ).val();
        $table.each(function( i, row ) {
          var $row = $( row );
          var contents = $row.find( 'td' ).eq( settings.column ).html().toLowerCase();
          if (contents.indexOf( filter ) === -1) {
            $row.hide();
          } else {
            $row.show();
          }
        });
      });
    });

  };

}( jQuery ));