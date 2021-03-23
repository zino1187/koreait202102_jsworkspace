class Ball{
    //new 연산자에 의해 호출되는 메서드를 생성자 메서드라 하고,
    //생성자 메서드의 목적인 이 객체가 인스턴스화될때, 즉 사물이 
    //탄생할때 알맞는 개성을 부여하기 위함이다!!!
    //공의 모습, 상태 등 형용사 적인것!!! 사실은 변수값!! 

    constructor(container, src, width, height, velX, velY){
        //객체와 함께 살아감..즉 객체가 죽을때 같이 죽음
        //따라서 this로 명시된 객체가 보유한 변수를 가리켜 
        //멤버변수라 한다!!
        this.container=container;//어디에 붙일지를 결정짓지 말고, 호출자가 결정하도록...
        this.src=src;
        this.x=0; 
        this.y=0;
        this.width=width;
        this.height=height;
        this.velX=velX; //좌우를 결정하는 변수 +일때 증가, -일때는 감소
        this.velY=velY; //상하를 결정하는 변수  +일때 증가, -일때는 감소
        this.limitX=parseInt(this.container.style.width); //공의 x축 한계점
        this.limitY=parseInt(this.container.style.height); //공의 y축 한계점
        this.r=0; //각도
        
        this.img=document.createElement("img");//공을 감쌀 div
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.src=this.src;
        this.img.style.position="absolute";
        this.img.style.left=0+"px";
        this.img.style.top=0+"px";
        this.img.style.padding=0+"px";

        //div 부모 요소에 부착
        this.container.appendChild(this.img);
    }

    //공의 동작!!
    move(){
        this.x = this.x+ this.velX; //10씩 증가하는 등속도 운동
        this.y = this.y+ this.velY; //10씩 증가하는 등속도 운동

        //y축의 경계에 다다르면..부호변경 
        if(this.y >= this.limitY-this.height || this.y<=0 ){ //밑바닥 or 천장 도달하면!!!
            this.velY=-1*this.velY;
        }
        //x축의 경계에 다다르면..부호변경 ( 0 or 너비까지)
        if(this.x<=0 || this.x>= this.limitX-this.width){
            this.velX=-1*this.velX;
        }

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.r+=2;
        this.img.style.transform="rotate("+this.r+"deg)";
    }
}