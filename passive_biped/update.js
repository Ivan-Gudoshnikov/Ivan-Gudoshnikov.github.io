function derivative(t,x){
    //d(1)=x(2);
    //d(2)=sin(x(1)-gamma);
    //d(3)=x(4);
    //d(4)=sin(x(1)-gamma)+(x(2))^2*sin(x(3))-cos(x(1)-gamma)*sin(x(3));
    return [x[1],
        Math.sin(x[0]-gamma),
        x[3],
        Math.sin(x[0]-gamma)+x[1]*x[1]*Math.sin(x[2])-Math.cos(x[0]-gamma)*Math.sin(x[2])];
    }

function checkSwitching(theta,phi,prevTheta,prevPhi,epsilon){
    return (Math.abs(phi)>epsilon)&&((2*theta-phi)*(2*prevTheta-prevPhi)<0);
}

function jump(X){
    var cos2Theta=Math.cos(2*X[0]);
    return [-X[0],
    cos2Theta*X[1],
    -2*X[0],
    cos2Theta*(1-cos2Theta)*X[1]];
}

function update(){
    var prevX=X;
    X=RK4(derivative,t,X,dt);
    t=t+dt;
    if (checkSwitching(X[0],X[2],prevX[0],prevX[2],epsilon)) {
            var coords=getLegsCoords(gamma,X[0],X[2],l,xA,yA);
            xA=coords[2];
            //yA=coords[3];
            yA=-Math.tan(gamma)*xA;
            
            X=jump(X);
    }
}