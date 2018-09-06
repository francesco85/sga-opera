(function($){
    //caricamento preload
    $('.preload__img').addClass('animation');
    $(document).ready(function(){  
        
        $('html, body').css({
            overflow: 'hidden',
            height: '100%'
        });
        
        //1.animazione preload
        
            var layer1 = $('.layer1');
            var cornice = $('#cornice rect');
            var logo = $('#logo line');
            var logoCon = $('#logo');
            var logoIe = $('.bg__img');
           var src = $('.bg').data('bg');
            var $img = $( '<img src="' + src + '">' );
            
                
                
            setInterval(function(){
                setInterval(function(){
                    $('.preload__img').removeClass('animation');
                    $('.preload').addClass('animation');
                },1000);
                setInterval(function(){
                    
                    //caricamento sfondo
                    
                    if($img && src){
                        
                    $img.bind( 'load', function(){
                        $( '.bg' ).css( 'background-image', 'url(' + src + ')' );
                    } );
                    if( $img[0].width ){ $img.trigger( 'load' ); }
                    }else{
                        
                        $img.bind( 'load', function(){
                            $( '.bg' ).css( 'background-image', 'url(\' ../img/bridge-clouds-forest.jpg \')' );
                    } );
                    if( $img[0].width ){ $img.trigger( 'load' ); }
                    }
                    $('.preload').addClass('animationSize');
                   
                },200);
                //animazione treno cornice e logo    
                $img.on('load',function(){
                    
                        setTimeout(function(){
                            $('.bg').css({'transform':'scale(1)','opacity':'1'});
                        },1000);
                    setTimeout(function(){
                        //togliamo preload e facciamo apparire sfondo
                        $('.preload').css({'display':'none'});
                        //animazione treno

                        layer1.css({'display':'block'});
                        logoCon.css({'display':'block'});
                        layer1.addClass('animation');  
                        cornice.addClass('animation');
                        logo.each(function(){
                            $(this).addClass('animation');  
                        });
                    },1500);
                    logoIe.css({'display':'block'});
                    setInterval(function(){
                        $('.bg__img').addClass('animation');//solo per ie
                    },6000);
                        //sipario
                        $('.mask').addClass('animation');
                    $('.preload').css({'position':'static'});
                });
            },2500);
            
        setTimeout(function(){
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        },4000);
        //fix dimensioni slide nel menù    
        var slider1 = $('.slider1').width();
        var slider2 = $('.slider2').width();
            var slides = $('.slider__slide');
            slides.each(function(){
                $(this).css({'width':slider1+'px'});
            });

        //animazione effetto esplosione dei pezzi sezione produzione
        var layer = $('.layer');
        var sezioneAz = $('#azienda');
        var heightFromTop;
        var scrollFromTop;
        var delta;
            $(window).on('scroll',function(){

                 heightFromTop = sezioneAz.offset().top;
                 scrollFromTop = $(window).scrollTop();
                 delta = scrollFromTop - heightFromTop;
    //                        console.log(delta);

                if(delta > 0){
                    layer.each(function(){
                        var link = $('.layer__link');
                        var that = $(this);
                        var categoria = that.data('category');
                        that.find(link).html(categoria);
                        that.find('img').ready(function(){
                            that.removeClass('explode');
    //                        console.log('explode');
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
        //carichiamo slider
        /*$('.slider1').slick({
            autoplay:true,
            autoplaySpeed:7000, 
            vertical:true,
            dots:false,
            slidesToShow: 1,
            arrows:false
        });
        $('.slider2').slick({
            autoplay:true,
            autoplaySpeed:4000, 
            dots:false,
            slidesToShow: 1,
            arrows:false
        });
        $('.slider3').slick({
            autoplay:true,
            autoplaySpeed:5000, 
            dots:false,
            slidesToShow: 1,
            arrows:false
        });*/
    });
})(jQuery);