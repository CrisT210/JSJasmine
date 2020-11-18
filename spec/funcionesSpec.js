function saluda(){
    return "HOLA";
}

function sigma(num){
    var sum = 0;
    for(var i=1; i<=num; i++){
        sum+=i;
    }
    return sum;
}
/*var nroSigma = 5;
resSigma = sigma(nroSigma);
console.log("Sigma("+nroSigma+"): "+resSigma);*/

describe("SET DE PRUEBA PARA saluda()", function() { 
    it("Retorna HOLA cuando de llame a la funcion", function() { 
        expect(saluda()).toEqual("HOLA"); 
    }); 
});

describe("SET DE PRUEBA PARA sigma()", function() { 
    it("Muestra suma total de 1 hasta n", function() { 
        expect(sigma(5)).toEqual(15); 
    }); 
});