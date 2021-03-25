/*사각형을 정의한다 */
class Rect{
    constructor(container, width, height, x, y, bg){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.bg=bg; //배경색 

        this.init();//내 메서드 호출!!
    }
    //디자인 초기화
    init(){
        this.div.style.width=this.width+"px";        
        this.div.style.height=this.height+"px";        
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.background=this.bg;
    }
}