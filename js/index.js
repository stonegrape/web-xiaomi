let tabs = document.getElementById("tabs").getElementsByTagName("li");
let lists= document.getElementById("lists").getElementsByTagName("ul");
for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = showlist;
}
//srcoll 滚动条距离页面顶部的距离
let seckillNav = document.getElementById("seckillNav");
window.onscroll = function(){
    //获取滚动条的高度
    let scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 260) {
        seckillNav.className = "seckill-nav seckill-navfixed";
    }else{
        seckillNav.className = "seckill-nav";
    }
    console.log(scrollTop);
}


function showlist() {
    for (let i = 0; i < tabs.length; i++) {
        if(tabs[i] === this) {
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }else{
            tabs[i].className="";
            lists[i].className="clearfix";
        }

    }
}