$().ready(function(){
    //自动填充目录：
    var $h2=$('.content h2');
    var $indexContent=$('#wrapper .item');
    $h2.each(function(i){
        $(this).attr('id','conttent'+i)
        $indexContent.append('<span><a href=#'+$(this).attr('id')+'>'+$(this).text()+'</a></span>');
    });

    //自动给每个h2标题添加动态下划线
    //由于h2元素与div不一样，本身的长度一定要占一整行，而div虽然也是block元素，但长度是随内容可变的。所以我们在每个h2元素外部包裹一个div
    $h2.each(function(){
        $(this).addClass('titleH2');
        $(this).wrap('<div></div>');
        $(this).prepend('<span class="titleLine"></span>');
    })
    //我们在js中根据h2的行高设置下划线的top值，而不用css，因为h2的行高/高度不一定确定，这样可以避免我们以后更改h2的height时下划线错位。
    $('.titleLine').each(function(){
        $(this).css('top',$h2.css('line-height'));
    })
    $('.titleH2').each(function (i,e) {
        var $this=$(this);
        $this.mouseover(function(){
            $this.children('.titleLine').css('width',$this.css('width'));
        });
        $this.mouseout(function () {
            $this.children('.titleLine').css('width','0px');
        })
    })



    //动态调整目录高度
    var oIndex=document.getElementById('wrapper');
    oIndex.style.height=(36*$('#wrapper .item span').length+300)+'px';


    //为内容div中的所有div添加类名：text1|text2
    var $contentDiv=$('#content');
    var $textDivEven=$contentDiv.children(':even');
    var $textDivOdd=$contentDiv.children(':odd');
    $textDivEven.addClass('text1');
    $textDivOdd.addClass('text2');

    
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

    //设置ol的属性
    $('ol').attr('type','I');
    $('.index>ol').attr('type','1');

    //修改logo内容
    $('.logo').html('Tomoyo');


    //为所有代码段<pre>标签加上字体图标
    var $pre=$('pre');
    $pre.each(function(){
        $(this).html('<span class="glyphicon glyphicon-console"></span>\n'+$(this).html());
    })
    
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
    $('title').hover(function () {
        $('title').text('fuck');
     });
    

    



    

    //下拉菜单内容
    $('.dropdown-menu').eq(0).html('<li><a href="index.html">HTML</a></li><li><a>游戏</a></li><li><a>日语</a></li><li><a>菜单</a></li>');
    $('.dropdown-menu').eq(1).html('<li><a href="HTML笔记.html">HTML笔记</a></li> <li><a href="正则表达式.html">正则表达式</a></li>    <li><a href="字符串操作.html">字符串操作</a></li>   <li><a href="bootstrap笔记.html">bootstrap笔记</a></li>    <li><a href="jquery笔记.html">jquery笔记</a></li>    <li><a href="JS笔记.html">JS笔记</a></li>')
    //导航栏Tomoyo链接
    $('.navbar-brand').attr('href','index.html')
    

});