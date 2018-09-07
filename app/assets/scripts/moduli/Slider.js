import slick from 'slick-carousel'; 
class Slider{
    constructor(slider,obj){
        this.slider = slider;
        this.obj = obj;
        this.slider.slick(this.obj);
    }

    events(){
        
    }
     
    
} 
 
export default Slider;