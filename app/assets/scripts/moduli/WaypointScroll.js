import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class WaypointScroll {
    constructor(target,els,offs){
        this.target = target;
        this.prodotti = els;
        this.offsetP =offs;
        this.prodottiWaypoints();
        console.log(els);
    }
    
    prodottiWaypoints(){
            var that = this;
            
                console.log(that.target[0]);
                new Waypoint({
                    element:that.target[0],
                    handler:function(direction){                            
                            if(direction === 'down'){   
                                that.prodotti.removeClass('explode');
                            }else{
//                                that.prodotti.addClass('explode'); 
                            }
                    },
                    offset: that.offsetP
                });
            
    }
}

export default WaypointScroll;