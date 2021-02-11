function getLegsCoords(gamma, theta, phi, l, xA, yA) {
    var p = l * Math.sin(theta);
    var h = l * Math.cos(theta);
    var xC = xA - p / Math.cos(gamma);
    var delta = Math.PI / 2 - gamma;
    var q = p * Math.tan(gamma);
    var xB = (q + h) * Math.cos(delta) + xC;
    var yB = (q + h) * Math.sin(delta) + yA;
// xB=l*((sin(theta)*tan(gamma)+cos(theta))*sin(gamma)-sin(theta)/cos(gamma))+xA;
//  yB=l*(sin(theta)*tan(gamma)+cos(theta))*cos(theta)+yA;
    var psi = phi - theta + gamma;
    var xF = xB - l * Math.sin(psi);
    var yF = yB - l * Math.cos(psi);
    return [xB, yB, xF, yF];
}