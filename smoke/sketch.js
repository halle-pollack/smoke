
var smokes = [];

function setup() {
    
    createCanvas(400,400);
    
}



function draw() {


    background(0);
    var s = new Smoke();
    smokes.push(s)


    for  (var i = smokes.length-1; i > 0 ; i --){

        smokes[i].show();
        smokes[i].update();

        if (smokes[i].remove()) {
            
            smokes.splice(i,1);

        }
    
    }
}


class Smoke{

    constructor(){

        this.x = mouseX;
        this.y = mouseY;
        this.vx = random(-2,2);
        this.vy = random(-5,-1);
        this.alpha = 255;
        this.radius = 8
    }

    show(){

        noStroke();
        fill(255, 153, 255,this.alpha);
        ellipse(this.x,this.y, this.radius);


    }

    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha += -5;
        this.radius += .5;


    }

    remove(){

        return (this.alpha < 0)

    }

}
