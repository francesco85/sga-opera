import slick from 'slick-carousel';
class Slider{
    constructor(slider,arr){
        this.slider = slider;
        this.autoplay = arr[0];
        this.speed = arr[1];
        this.vertical = arr[2];
        this.dots = arr[3];
        this.slidesToShow = arr[4];
        this.arrows = arr[5];
        this.slick();
    }
    
    events(){
        
    } 
     
    slick(){
        return{
            
            autoplay:this.autoplay,
            autoplaySpeed:this.speed, 
            vertical:this.vertical,
            dots:this.dots,
            slidesToShow: this.slidesToShow,
            arrows:this.arrows
        };
        
    }
    
} 

export default Slider;