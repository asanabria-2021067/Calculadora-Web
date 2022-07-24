class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        var numero = Math.sign(num1);
        if(numero == -1){
            num1 = num1 + -1;
            return ("-" + (num1 - num2));
        }
        if(num1 == num2){
            return "0";
        } else{
            return num1 - num2; 
        }
        
    }

    dividir(num1, num2) {
        if(num1 < 0){
            num1 = num1 + -1;
            return(num1 / num2);
        }
        if(num2 != 0){
            return num1 / num2; 
        } else {
        return "MATH ERROR:"+
        "[C] :Cancel"
    }
    }
    

    multiplicar(num1, num2) {
        if(num1 < 0){
            num1 = num1 + -1;
            return(num1 * num2);
        }
        return num1 * num2;
    }

    residuo(num1, num2){
        if((num1 % num2)==0){
            return "0";
        } else{
            return num1 % num2;
        }
    }
} 