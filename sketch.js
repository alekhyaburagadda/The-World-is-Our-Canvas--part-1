var canvas;
var drawing= [];


function setup(){
  canvas= createCanvas(1000,1000);


}

function draw(){
  background(250);
if(mouseIsPressed){
var point= {
  x:mouseX,
  y:mouseY
}
  drawing.push(point); 
} 
 beginShape();
 stroke(0);
 strokeWeight(4);
 noFill();
for(var i=0; i < drawing.length; i++){
vertex(drawing[i].x, drawing[i].y) 
}
endShape();

}