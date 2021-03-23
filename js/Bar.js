/*현실의 객체 중 이퀄라이저 막대기를 정의한다!!
우리가 정의한 이러한 객체를 가리켜 사용자 정의 객체라 하며, 
자료형은 문자? 숫자? 논리값? 객체형..이때 Bar객체 자료형을 
개발자가 정의했다는 것은, 기존에 세상에 없던 새로운 자료형을
정의했다고 하여, Bar형이라고 한다..즉 개발자가 창조주가 되는것이다
*/
class Bar{
    /*클래스란 기존의 고전적인 절차지향 언어에서  사용하던 재료들
    즉 변수와 함수를 묶어 하나의 단위로 정의한  것에 불과하므로, 
    신기술이라기 보다는, 현실을 반영하는 개발자가의 관점이 변화된
    것이다..자바수업에서 무언가 없던 기술을 새롭게 배운다고
    착각하지 말자!*/
    constructor(width, height, x, y){ //메서드 중 객체의 인스턴스 생성시점에 관여하여
        //객체의 개성을 부여할 수 있도록, 즉 초기화 할수 있도록 역할을
        //수행하는 메서드를 특별히 생성자 메서드라 한다!!!!!!
        //개발자는 여기서, 이 사물이 태어날때 어떠한 개성을 가지고 
        //태어날지 즉 스타일을 결정할 수 있다!! "객체의 초기화"
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;

        this.div = document.createElement("div");
        //크기
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        //위치 
        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        
    }

}