function getInitialValues(gamma) {

    var Theta0 = 0.943976;
    var Theta1 = -0.264561;
    var alpha = -1.090331;
    var c1 = 0.866610;

    var theta = Theta0 * Math.cbrt(gamma) + Theta1 * gamma;
    var thetaP = alpha * Theta0 * Math.cbrt(gamma, 3) + (alpha * Theta1 + c1) * gamma;
    var phi = 2 * theta;
    var phiP = thetaP * (1 - Math.cos(2 * thetaP));

    return [theta, thetaP, phi, phiP];
}
