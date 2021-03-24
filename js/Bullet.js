/*총알을 정의한다*/
class Bullet{
    /*변수(Property), 함수(Method)*/

    constructor(container, src, width, height, x, y, velX, velY){
        //멤버변수 (객체와 생명을 같이 하는 변수)
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;
        
        //총알의 모습을 설정해본다!! 
        this.img.src=this.src;

        //크기
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        //위치        
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        //부모 요소에 부착
        this.container.appendChild(this.img);
    }

    //물리량 변화
    tick(){
        this.x += this.velX;
        this.y += this.velY;

        //총알은 날아가다가, 자신이 스크린을 벗어 난다면, 자살
        if(this.x > screen.width ){
            //console.log("저 스스로 죽을께요");
            //console.log("화면끝네 도달한 저는요 바로 ", this);
            var index = bulletArray.indexOf(this);
            //console.log("저는 bulletArray의 ", index , " 번째에 살고있어요");
            removeObject(this.container , this.img, bulletArray, index); //총알배열의 크기에 변경사항생김
        }
    }

    //그래픽 적 처리 
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}