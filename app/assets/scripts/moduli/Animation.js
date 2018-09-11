import $ from 'jquery';
import {TweenLite,TimelineMax, TweenMax} from "gsap/all";
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Animation{
    constructor(){
        this.layer1 = $('.layer1');
        this.cornice = $('#cornice rect');
        this.logo = $('#logo line');
        this.logoCon = $('#logo');
        this.logoIe = $('.bg__img');
        this.background = $( '.bg' ); 
        this.src = this.background.attr('data-bg');
        this.$img = $( '<img src="' + this.src + '">' );
        this.preloadLogo = $('.preload');
        this.preloadImg = $('.preload__img');
        this.generalTl = new TimelineMax();
        this.events();
        
         
    }
    
    events(){
        this.start();
    }
    
    start(){
        var that = this; 
        this.sfondo();
        this.generalTl
            .to(this.preloadLogo, 0.1, {scale:0,opacity:0},"+=0.3") 
            .to(this.preloadLogo,0.1,{width:0,height:0},"+=0.3");
            this.$img.on('load',this.animazioneTreno.bind(this));
    
    }
    
    sfondo(){
        var that = this;
        if(this.$img && this.src){
                    this.$img.bind( 'load', function(){
                        that.background.css( 'background-image', 'url(' + that.src + ')' );
                    } );
                    if( this.$img[0].width ){ this.$img.trigger( 'load' ); }
                    }else{
                        
                        this.$img.bind( 'load', function(){
                            that.background.css( 'background-image', 'url(\' ../img/bridge-clouds-forest.jpg \')' );
                    } );
                    if( this.$img[0].width ){ this.$img.trigger( 'load' ); }
                    }
        
         
    }    
    animazioneTreno(){
//        console.log(this.logo);
        this.generalTl 
            .to($('.bg'), 0.3,{opacity:1})
            .to(this.layer1,1.5,{scale:1}, "-=0.1")
            .to($('.mask'),.5,{height:'100%'},"+=0.3")
            .fromTo(this.cornice,6,{strokeDasharray: 10000, strokeDashoffset: 10000},{strokeDasharray: 10000, strokeDashoffset: 0},"+=0.5")
            .fromTo(this.logo,3,{strokeDasharray: 1000, strokeDashoffset: 1000},{strokeDasharray: 1000, strokeDashoffset: 0},"-=6");       
    } 
    
    
        
}

export default Animation;