/*
달력의 셀 하나를 표현하는 사각형
일정 등록 및 날짜 표가 가능한 객체
*/
class DateBox{
    constructor(container, width, height){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;

        this.init();
    }    
    init(){
        this.div.style.width=this.width+"px";        
        this.div.style.height=this.height+"px"; 
        this.div.style.background="yellow";
        this.div.style.border="1px solid red";
        this.div.style.boxSizing="border-box";
        this.div.style.float="left"; //block 이니깐 
        this.container.appendChild(this.div);//부모에 부착
    }
}



