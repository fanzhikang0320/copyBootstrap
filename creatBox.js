(function(){
    $.fn.extend({
        creatBox:function(options){
            options.wrap = this;
            new Box(options);
        }
    })
    function Box(options){
        this.wrap = options.wrap;//获取父级
        this.data = options.data;
        console.log(this.data)
        this.creatDom();//创建do结构
        this.initStyle();//初始化样式
    }
    Box.prototype.creatDom = function(){
        console.log('ok');
        var self = this;
        this.data.forEach(function(ele,index){
            console.log(ele)
            console.log(self.wrap)
           var col = $('<div class="col"></div>');
           var thumbnail = $('<div class="thumbnail"></div>');
           var img = $('<img src='+ele.imgSrc+'>');
           var caption = $('<div class="caption"></div>');
           var h3 = $('<h3><a>'+ele.a_up+'<br><small>'+ele.a_small+'</small></a></h3>');
           var p = $('<p>'+ele.p+'</p>');
           $(caption).append(h3).append(p);
           $(thumbnail).append(img).append(caption);
           $(col).append(thumbnail)
           $(self.wrap).append(col);

        })
    }
    Box.prototype.initStyle = function(){
        $('img' ,this.wrap).css({
            maxWidth:'100%',
            height: 'auto',
        })
        $('thumbnail',this.wrap).css({
            height:352
        })
    }
})()