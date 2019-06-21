$(document).ready(function(){   
        $(".lst").click(function(){
            $(".collap").addClass("on");
            
            $(".wrap").addClass("on");
        });    
        $(".close").click(function(){
            $(".collap").removeClass("on");
            
            $(".wrap").removeClass("on");
        });    
        $(window).scroll(function(){
            var par = parseInt($(window).scrollTop());
            if(par>=200){
                $(".hd").addClass("on");
                $(".to_top").fadeIn(500);
                $(".logo").addClass("on");
            } else {
                $(".hd").removeClass("on");
                $(".to_top").fadeOut(500);
                $(".logo").removeClass("on");
            }
        });

        var wd = parseInt($(window).width());
        var intv = setInterval(function(){
            nextAni();
        }, 3000);
        function nextAni(){
            $(".img_box").not(":animated").animate({"margin-left":-wd+"px"},800, function(){
                $(".img_box li").eq(0).appendTo($(".img_box"));
                $(".img_box").css("margin-left", "0px");
                $(".btn_box li").eq(0).appendTo($(".btn_box"));
                $(".btn_box li").removeClass("on");
                $(".btn_box li").eq(0).addClass("on");
            }); 
    }
    var sw = true; 
    $(".play").click(function(){
        if(sw==true){
            $(this).addClass("on");
            clearInterval(intv);
        } else {
            $(this).removeClass("on");
            intv = setInterval(function(){
                nextAni();
                }, 3000);
            }
            sw= !sw;
        });
        $(".btn_box li").click(function(){
            var idx = $(this).index()-1;
            clearInterval(intv);
            for(var i=0;i<idx;i++){
                $(".btn_box li").eq(0).appendTo($(".btn_box"));
                $(".img_box li").eq(0).appendTo($(".img_box"));
            }
            nextAni();
            intv = setInterval(function(){
                nextAni();
            }, 3000);        
        });
    });