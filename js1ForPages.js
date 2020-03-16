$().ready(function(){
    var oIndex=document.getElementById('index');
    var oContent=document.getElementById('content');
    var oStyleContent=window.getComputedStyle(oContent);
    //这里使用getComputedStyle获取最终样式值。因为oIndex.style只能获取内联样式，而我们的
    //样式是在style标签里定义的。
    var iHt=parseInt(oIndex.style.height);
    oIndex.style.height=(iHt>800?iHt:800)+'px';
    var oMainDiv=document.getElementById('mainDiv');
    var oStyleMainDiv=window.getComputedStyle(oMainDiv);
    //oMainDiv.style.height=((parseInt(oStyleContent.height)>800?parseInt(oStyleContent.height):800)+180)+'px';
    // alert(window.getComputedStyle(oMainDiv).height);

    // alert(oContent.style.height);
    //为内容div中的所有div添加类名：text1|text2 从这里开始用jQuery
    var $contentDiv=$('#content');
    var $textDivEven=$contentDiv.children(':even');
    var $textDivOdd=$contentDiv.children(':odd');
    $textDivEven.addClass('text1');
    $textDivOdd.addClass('text2');


    //设置h2的类（以便下面自动填充目录）
    $('div#content>div>h2').addClass('titleForIndex');

    //自动填充目录：
    var aTitleOfText=document.getElementsByClassName('titleForIndex');
    var oOl=document.getElementById('ulOfIndex');
    for(var i=0;i<aTitleOfText.length;i++)
    {
        var node=document.createElement('li');
        aTitleOfText[i].id='textTitle'+i;
        node.innerHTML='<a href=#'+aTitleOfText[i].id+'>'+aTitleOfText[i].innerHTML+'</a>';
        oOl.appendChild(node);
    }

    //设置事件监听器，用来监听过渡效果是否完成
    document.addEventListener('transitionend',function(){
        var $DropdownMenu=$('ul.dropdown-menu');        
        var iOpa=parseInt($DropdownMenu.css('opacity'));
        if(iOpa==0){
            $DropdownMenu.css('display','none');
            return;
        }
    })

    //设置ol的属性
    $('ol').attr('type','I');
    $('.index>ol').attr('type','1');

});