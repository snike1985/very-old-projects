$(function(){
    $( 'select' ).each( function(){
        new NiceSelect( $( this ) );
    } );
} );

var NiceSelect = function(obj){
    this.obj = obj;
    this.span = $( '<span class="nice-select__item"></span>' );
    this.wrap = $( '<div class="nice-select"></div>' );

    this.init();
};
NiceSelect.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.core.setStart();
                self.core.controls();
            },
            setStart: function(){
                var obj = self.obj,
                    wrap = self.wrap,
                    span = self.span,
                    curText = '';

                obj.css( {
                    opacity: 0
                } );

                obj.wrap( wrap );
                obj.before( span );
                self.obj.find( 'option' ).each( function(){
                    var curItem = $( this );

                    if( curItem.attr( 'selected' ) == 'selected' ){
                        curText = curItem.text();
                    }
                } );

                if( curText == '' ){
                    curText =  self.obj.find( 'option').eq( 0 ).text();
                }
                span.text( curText );
            },
            controls: function() {
                self.obj.on( 'change', function() {
                    self.span.text( $( this ).find('option:selected').text() );
                } );
            }
        };
    }

};