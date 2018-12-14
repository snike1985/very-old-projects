$( function(){
    $( 'input[ type="checkbox" ]').each( function(){
        new NiceCheck( $( this ) )
    } );



    $('.chooseAll input[ type="checkbox" ]').on( "change",function(){

        if($(this).attr( 'checked' )){
            $(".allType .niceCheck > input").attr("checked",true);
            $(".allType .niceCheck").addClass("niceChecked");
        }else{
            $(".allType .niceCheck > input").attr("checked",false);
            $(".allType .niceCheck").removeClass("niceChecked");
        }
    });




} );

var NiceCheck = function( obj ){
    this.obj = obj;

    this.init();
};
NiceCheck.prototype = {
    init: function(){
        var self = this;

        self.core = self.core();
        self.core.build();
    },
    core: function(){
        var self = this;

        return {
            build: function(){
                self.checkChecked = self.obj.attr("checked");
                self.checkDisabled = self.obj.attr("disabled");

                self.parent = self.obj.parent();
                self.label = self.parent.find( 'label' );
                self.label2 = self.parent.find( '.label' );

//                self.label.removeAttr( 'for' );

                self.obj.wrap( '<span class="' + self.obj.attr( 'class' ) + '"></span>' );

                self.wraper = self.obj.parent();

                self.obj.removeClass( 'niceCheck' );

                if ( self.checkChecked ) {
                    self.wraper.addClass( 'niceChecked' );
                }

                if( self.checkDisabled ) {
                    self.wraper.addClass( 'niceCheckDisabled' );
                }

                self.core.controls();
            },
            change: function(){
                if ( self.checkChecked ) {
                    self.wraper.removeClass( 'niceChecked' );
                    self.checkChecked = false;
                    self.obj.parents('.lineContainer').removeClass("active");
                    self.obj[ 0 ].checked = false;
                } else {
                    self.wraper.addClass( 'niceChecked' );
                    self.checkChecked = true;
                    self.obj.parents('.lineContainer').addClass("active");
                    self.obj[ 0 ].checked = true;
                }
                self.obj.trigger( 'change' );
            },
            controls: function(){
                self.label.on( {
                    'click': function(){
                        if ( !self.checkDisabled ) {
                            self.core.change();
                        }
                    }
                } );
                self.label2.on( {
                    'click': function(){
                        if ( !self.checkDisabled ) {
                            self.core.change();
                        }
                    }
                } );
                self.label.on( {
                    'click': function(){

                        if ( !self.checkDisabled ) {

                            self.core.change();
                        }
                    }
                } );
                self.wraper.on( {
                    'click': function(){
                        if ( !self.checkDisabled ) {
                            self.core.change();
                        }
                    }
                } );
            }
        }
    }
};


