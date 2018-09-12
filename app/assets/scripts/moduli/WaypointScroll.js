import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class WaypointScroll {
    constructor(target,els,offs){
        this.target = target;
        this.prodotti = els;
        this.offsetP =offs;
        this.prodottiWaypoints();
    }
    
    prodottiWaypoints(){
            /*var that = this;
            
                console.log(that.target[0]);
                new Waypoint({
                    element:that.target[0],
                    handler:function(direction){                            
                            if(direction === 'down'){   
                                that.prodotti.removeClass('explode');
                            }else{
                            }
                    },
                    offset: that.offsetP
                });*/
        
        var layer = $('.layer');
        var sezioneAz = $('#azienda');
        var heightFromTop;
        var scrollFromTop;
        var delta;
            $(window).on('scroll',function(){

                 heightFromTop = sezioneAz.offset().top;
                 scrollFromTop = $(window).scrollTop();
                 delta = scrollFromTop - heightFromTop;

                if(delta > 0){
                    layer.each(function(){
                        var link = $('.layer__link');
                        var that = $(this);
                        var categoria = that.data('category');
                        that.find(link).html(categoria);
                        that.find('img').ready(function(){
                            that.removeClass('explode');
                        });
                            setTimeout(function(){that.css({'transition':'none'});},1000);
                    });
                }else{
                     
                }
            });
        // ricarichiamo il nostro div con le categorie di prodotti
        $(window).on('resize',function(){
            if($(window).innerWidth < 1200){ 
                //ajax solo se si dovesse ricare il contenuto
                $("#scene").load(document.location.href + "#scene");
            }
        });
            
    }
}

export default WaypointScroll;