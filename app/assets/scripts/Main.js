import $ from 'jquery';
import Slider from './moduli/Slider';
//import init from './moduli/init';
import app from './moduli/app';
import Parallax from 'parallax-js';

var slider1 = new Slider($('.slider1'),{autoplay:true,autoplaySpeed:7000,vertical:true,dots:false,slidesToShow:1,arrows:false});
var slider2 = new Slider($('.slider2'),{autoplay:true,autoplaySpeed:4000,vertical:true,dots:false,slidesToShow:1,arrows:false});
var slider3 = new Slider($('.slider3'),{autoplay:true,autoplaySpeed:5000,vertical:true,dots:false,slidesToShow:1,arrows:false});

if(window.innerWidth > 1200){
        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene);
}
