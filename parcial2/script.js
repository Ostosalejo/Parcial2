// Parseo en JavaScript
var variable = parseFloat(document('XXX').value) || 0;
 let num1 = document.getElementById('num1');
 let num2 = document.getElementById('num2');
 let resultado = getElementById('resultado');
switch (op) {
  case 'sumar':
    function suma (num1,num2) {
        let resultado;
        resultado = num1 + num2;
        return resultado;
    }
    break;
    
  case 'restar':
    function resta (num1,num2) {
        let resultado;
        resultado = num1 - num2;
        return resultado;
    }
      break;
    
    case 'multiplicacion':
        function multipicar (num1,num2) {
            let resultado;
            resultado = num1 * num2;
            return resultado;
        }
        break;

    case 'division':
            function division (num1,num2) {
                let resultado;
                resultado = num1 / num2;
                return resultado;
            }
            break;
        
}