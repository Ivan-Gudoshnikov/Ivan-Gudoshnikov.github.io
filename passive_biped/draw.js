function drawCoord(x,y){
    return [zoom*x+offset[0],-zoom*y+offset[1]];
}

function draw(canvasContext){
    canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
    canvasContext.beginPath(); 
    var a=drawCoord(xA,yA);
    var legs=getLegsCoords(gamma, X[0], X[2], l, xA, yA);
    canvasContext.moveTo(a[0],a[1]);
    var b=drawCoord(legs[0], legs[1]);
    var f=drawCoord(legs[2], legs[3]);
    canvasContext.lineTo(b[0],b[1]);
    canvasContext.lineTo(f[0],f[1]);
    canvasContext.strokeStyle="#010000";
    canvasContext.stroke();
    
    if (f[0]>canvasContext.canvas.width) offset[0]-=canvasContext.canvas.width;
    if (f[1]>canvasContext.canvas.height) offset[1]-=2*zoom;    
    
    canvasContext.beginPath();
    var x1=-offset[0]/zoom;
    var x2=(canvasContext.canvas.width-offset[0])/zoom;
    var l1=drawCoord(x1,x1*Math.tan(-gamma));
    var l2=drawCoord(x2,x2*Math.tan(-gamma));
    canvasContext.moveTo(0,l1[1]);
    canvasContext.lineTo(canvasContext.canvas.width,l2[1]);
    canvasContext.strokeStyle="#00fb00";    
    canvasContext.stroke();
    
    canvasContext2.fillStyle="#fb0000";
    canvasContext2.fillRect(offset2[0]+10*t,offset2[1]-zoom2*X[0],1,1);
    canvasContext2.stroke();
    canvasContext2.fillStyle="#0000fb";
    canvasContext2.fillRect(offset2[0]+10*t,offset2[1]-zoom2*X[2],1,1);
    canvasContext2.stroke();
    
    if (10*t+offset2[0]>canvasContext2.canvas.width) {
        offset2[0]-=canvasContext2.canvas.width;
        canvasContext2.clearRect(0, 0, canvasContext2.canvas.width, canvasContext2.canvas.height);
    }
      
}