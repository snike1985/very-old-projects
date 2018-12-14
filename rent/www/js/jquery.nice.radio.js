$( function(){
    $( 'input[type="radio"]' ).each( function(){
        new NiceRadio( $( this ) );
    } );
} );
var NiceRadio = function( obj ){
    this.obj = obj;

    this.init();
};
    NiceRadio.prototype = {
        init: function(){
            var self = this;

            self.core = self.core();
            self.core.build();
        },
        core: function(){
            var self = this;

            return {
                build: function(){
                    self.core.startView();

                },
                startView: function(){
                    self.name = self.obj.attr( 'name' );
                    self.wrap = $( '<span class="nice-radio"></span>' );
                    if( self.obj[ 0 ].checked == true ){
                        self.wrap.addClass( 'nice-radio_checked' );
                    }

                    self.obj.wrap( self.wrap );
                    self.core.controls();
                },
                changeView: function(){
                    var curItem;
                    $( 'input[type="radio"]').each( function(){
                        curItem = $( this );

                        if( curItem.attr( 'name' ) == self.name ){
                            if( this.checked == true ){
                                curItem.parent().addClass( 'nice-radio_checked' );
                            } else {
                                curItem.parent().removeClass( 'nice-radio_checked' );
                            }
                        }
                    } );
                },
                controls: function(){
                    self.obj.on( {
                        change: function(){
                            self.core.changeView();
                        }
                    } );

                    self.obj.parent().on( {
                       click: function(){
                           self.obj[ 0 ].checked = true;
                           self.obj.trigger( 'change' );
                        }
                    } );
                }
            };
        }
    };