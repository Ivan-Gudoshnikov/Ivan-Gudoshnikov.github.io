var X, xA, yA, l, gamma, epsilon, dt, t;
var zoom, offset=[], zoom2, offset2=[];
var canvasContext;
var canvasContext2;

function init() {
    //Setting up math
    l = 5; //lendgth of legs
    gamma = 0.007; //slope of the ramp
    epsilon = 0.1; //if abs(phi)<epsilon then switching condition is ignored(no scuffing)
    dt = 0.03;
    X = getInitialValues(gamma);
    xA=0;
    yA=0;
    t=0;

    //Setting up canvas
    var canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext("2d");
    canvasContext.canvas.width  = window.innerWidth;
    canvasContext.canvas.height = window.innerHeight*0.4;
    zoom=canvasContext.canvas.height/12;
    offset=[2*zoom,canvasContext.canvas.height-2*zoom];
    
    var canvas2 = document.getElementById("myCanvas2");
    canvasContext2 = canvas2.getContext("2d");
    canvasContext2.canvas.width  = window.innerWidth;
    canvasContext2.canvas.height = window.innerHeight*0.4;
    offset2=[0,canvasContext2.canvas.height/2];
    zoom2=canvasContext2.canvas.height;
   
    var intervalID = setInterval(function(){draw(canvasContext);update();}, 500*dt);
}