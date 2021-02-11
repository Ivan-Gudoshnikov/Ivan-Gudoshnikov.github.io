//f:t,x -> x'(t,x)
        function RK4(f, t0, x0, h) {
            var n = x0.length;
            var k1 = [], arg = [];
            var derivative = f(t0, x0);
            // Вычислем k1=h*f(t0,x0), и аргумент для следующего запроса производной arg2=x0+k1/2
            for (i = 0; i < n; i++) {
                k1.push(h * derivative[i]);
                arg.push(x0[i] + k1[i] / 2);
            }
            //k2=h*f(t0+h/2,arg2), arg3=x0+k2/2
            derivative = f(t0 + h / 2, arg);
            var k2 = [];
            arg = [];
            for (i = 0; i < n; i++) {
                k2.push(h * derivative[i]);
                arg.push(x0[i] + k2[i] / 2);
            }

            //k3=h*f(t0+h/2,arg3), arg4=x0+k3
            var k3=[];
            derivative = f(t0 + h / 2, arg);
            arg=[];
            for (i = 0; i < n; i++) {
                k3.push(h * derivative[i]);
                arg.push(x0[i] + k3[i]);
            }
            //k4=h*f(t0+h,arg4)
            var k4 = [];
            derivative = f(t0 + h, arg);
        
            for (i = 0; i < n; i++) { 
                k4.push(h * derivative[i]);
            }
            //x1=x0+(k1+2*k2+2*k3+k4)/6
            var result = [];
            for (i = 0; i < n; i++) {
                result.push(x0[i] + (k1[i] + 2 * (k2[i] + k3[i]) + k4[i]) / 6);
            }
            
            return result;
        }


