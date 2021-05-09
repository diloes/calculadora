/** CALCULADORA **/

const buttons = document.querySelectorAll('.btn');
let screen = document.getElementById('screen');
let num1 = '';
let num2 = '';
let result = 0;
let num1e;
let num1en;
let num2en;

document.addEventListener('DOMContentLoaded', function(){
    n1();
});

function n1(){
    buttons.forEach(e => {
        e.addEventListener('click', i => {
            num1 += e.innerHTML;
            console.log(`esto es num1: ${num1}`)
            screen.innerHTML = num1;

            if(e.innerHTML === '+' || e.innerHTML === '-' || e.innerHTML === '*' || e.innerHTML === '/'){
                num1e = num1.substring(0, num1.length - 1);
                console.log(`este es num1e: ${num1e}`);
                screen.innerHTML = e.innerHTML;
                n2();
            }
        });
    });
}

function n2(){
    buttons.forEach(e => {
        e.addEventListener('click', i => {
            num1en = parseInt(num1e);
            console.log(num1en)
            num2 += e.innerHTML;
            console.log(`esto es num2: ${num2}`)
            screen.innerHTML = num2;

            if(e.innerHTML === '='){
                num2en = parseInt(num2);
                operacion();
            }
        });
    });
}

function operacion(){
    switch(true){

        case num1.includes('+'):
            result = num1en + num2en;
            screen.innerHTML = result;
            break;

        case num1.includes('-'):
            result = num1en - num2en;
            screen.innerHTML = result;
            break;
        
        case num1.includes('/'):
            result = num1en / num2en;
            screen.innerHTML = result;
            break;
        
        case num1.includes('*'):
            result = num1en * num2en;
            screen.innerHTML = result;
            break;       
    }
}

function ce(){
    const c = document.getElementById('c');
    c.addEventListener('click', e => {
        console.log('ce');
        screen.innerHTML = '';
        //quizás deba meter ifs por si estan vacias las variables no es necesarios convertirlas a string vacio
        num1 = '';
        num1en = '';
        num2 = '';
    });
}


