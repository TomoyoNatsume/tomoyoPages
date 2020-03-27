$().ready(function(){
    //设置事件监听器，用来监听过渡效果是否完成
    document.addEventListener('transitionend',function(){
        var $DropdownMenu=$('ul.dropdown-menu');
        $DropdownMenu.each(function(){
            var iOpa=parseInt($(this).css('opacity'));
            if(iOpa==0){
                $(this).css('display','none');
            }
        });
    });


    
    //修改logo内容
    $('.logo').html('Tomoyo');


    //动态标题
    var tit1='Tomoyo的主页(゜-゜)つロ                ';
    var tit2='----Tomoyo的笔记ヾ(*´▽‘*)ﾉ                ';
    var tit3='您已离开当前页面ﾍ(;´Д｀ﾍ)';
    var motoTit=$('title').text();
    var i=0,str1='',str2=motoTit;
    function funInterval(){
        str1+=tit1[i];
        str2+=tit2[i];
        i++;
        if($('#indexTitle').length>0){
            $('title').text(str1);
            i==tit1.length && (i = 0,str1='');
        }
        else{
            $('title').text(str2);
            i==tit2.length&&(i=0,str2=motoTit);
        }
    }
    var interval1=setInterval(funInterval,200);    
    function changeTitle(){
        if(document.hidden){
            $('title').text(tit3);
            clearInterval(interval1);
        }
        else{
            interval1=setInterval(funInterval,200);    
        }
    }
    document.addEventListener('visibilitychange',changeTitle);
    //下拉菜单内容
    $('.dropdown-menu').eq(0).html('<li><a href="htmlPages/indexPage.html">HTML</a></li><li><a>游戏</a></li><li><a>日语</a></li><li><a>菜单</a></li>');
    // $('.dropdown-menu').eq(1)&&$('.dropdown-menu').eq(1).html('<li><a href="htmlPages/HTML笔记.html">HTML笔记</a></li> <li><a href="htmlPages/正则表达式.html">正则表达式</a></li>    <li><a href="htmlPages/字符串操作.html">字符串操作</a></li>   <li><a href="htmlPages/bootstrap笔记.html">bootstrap笔记</a></li>    <li><a href="htmlPages/jquery笔记.html">jquery笔记</a></li>    <li><a href="htmlPages/JS笔记.html">JS笔记</a></li>')
    //导航栏Tomoyo链接
    $('.navbar-brand').attr('href','index.html')




    //滑动目录的翻页特效
    //每添加一个，需要
    var x=50,y=50;
    $('figure canvas').each(function () {
        var _ctx=this.getContext('2d');
        _ctx.translate(25.5,25.5);
    })
    //var ctx=cav1.getContext('2d'); 
    var sRbg=['rgb(177, 177, 177)','rgb(255, 229, 158)','rgb(14, 163, 126)','rgb(240, 130, 130)'];

    function drawTriangle(ctx,x,y){
        ctx.shadowBlur=10;
        ctx.shadowOffsetX=x>25?2:-2;
        ctx.shadowOffsetY=x>25?2:-2;
        ctx.beginPath();
        ctx.moveTo(50,0);
        ctx.lineTo(x,y);
        ctx.lineTo(0,50);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    function drawTriangleBackground(ctx){
        ctx.fillStyle='rgb(44, 63, 82)';
        ctx.shadowBlur=0;  
        ctx.shadowOffsetX=0;
        ctx.shadowOffsetY=0;
        ctx.beginPath();
        ctx.moveTo(50,2);
        ctx.lineTo(50,50);
        ctx.lineTo(2,50);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    function figHover(){
        var $thisCanvas1=$(this).children('canvas');
        var $this=$(this);
        var ctx=$thisCanvas1[0].getContext('2d');
        ctx.globalAlpha=1;
        ctx.lineWidth=0.1;
        ctx.shadowColor='grey';
        $thisCanvas1.css('visibility','visible');
        // $('#cav1').css('visibility','visible');
        x=50,y=50;
        var interHandle1=setInterval(function () {
            if(y<=0){
                clearInterval(interHandle1);
                return;
            }
            // y<25&&(ctx.fillStyle='rgb(255,255,255)');
            y-=2;
            x-=2;
            ctx.clearRect(-25.5,-25.5,75,75);
            drawTriangleBackground(ctx);
            var i=parseInt($this.attr('id').match(/\d+/));
            ctx.fillStyle=sRbg[i-1];
            drawTriangle(ctx,x,y);
        },8);
    }
    function figOut(){
        var $thisCanvas2=$(this).children('canvas');
        var $this=$(this);
        var ctx=$thisCanvas2[0].getContext('2d');
        ctx.globalAlpha=1;
        ctx.lineWidth=0.1;
        ctx.shadowColor='grey';
        x=0;
        y=0;
        ctx.fillStyle='rgb(255,255,255)';
        var interHandle2=setInterval(function () {
            if(y>=50){
                clearInterval(interHandle2);
                // $('#cav1').css('visibility','hidden');
                $thisCanvas2.css('visibility','hidden');
                return;
            }
            // y>25&&(ctx.fillStyle='rgb(177, 177, 177)');
            y+=2;
            x+=2;
            
            ctx.clearRect(-25.5,-25.5,75,75);
            drawTriangleBackground(ctx);
            var i=parseInt($this.attr('id').match(/\d+/));
            ctx.fillStyle=sRbg[i-1];
            drawTriangle(ctx,x,y);
        },8);
    }
    $('#fig1').hover(figHover,figOut);
    $('#fig2').hover(figHover,figOut);
    $('#fig3').hover(figHover,figOut);
    $('#fig4').hover(figHover,figOut);
    

});