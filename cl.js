const currDisplay=document.querySelector('.current-disp');
const prevDisplay=document.querySelector('.previous-disp');
const numbers=document.querySelectorAll('.number');
const operands=document.querySelectorAll('.operation');
const clearBtn=document.querySelector('.clear');
const delBtn=document.querySelector('.delete');
const equalsBtn=document.querySelector('.equal');
let operation;

function appendNumbers(number){
    if(number=== "." && currDisplay.innerHTML.includes(".")) return;
    currDisplay.innerHTML += number;
}

function chooseOperation(operands){
    if(currDisplay.innerHTML==="") return;
    compute(operands);
    operation=operands;
    currDisplay.innerHTML += operands;
    prevDisplay.innerHTML = currDisplay.innerHTML;
    currDisplay.innerHTML = "";

}

function clearDisp(){
    currDisplay.innerHTML="";
    prevDisplay.innerHTML="";    
}

function compute(operands){
    let result;
    const prevDisplayValue=parseFloat(prevDisplay.innerHTML);
    const currentValue=parseFloat(currDisplay.innerHTML);

    if(isNaN(prevDisplayValue) || isNaN(currentValue)) return;

    switch(operation){
        case "+":
            result = prevDisplayValue + currentValue;
            break;
         case "-":
            result = prevDisplayValue - currentValue;
            break;
             case "*":
            result = prevDisplayValue * currentValue;
            break;
             case "/":
            result = prevDisplayValue / currentValue;
            break;
            default:
                return;
    }
    currDisplay.innerHTML = result;
}

numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        appendNumbers(number.innerText);
    });

});

operands.forEach((operands)=>{
    operands.addEventListener("click",()=>{
        chooseOperation(operands.innerText);
    });
});

clearBtn.addEventListener("click",()=>{
    clearDisp();
});

equalsBtn.addEventListener("click",()=>{
    compute();
    prevDisplay.innerText="";
});

delBtn.addEventListener("click",()=>{
    currDisplay.innerText=currentValue.innerText.slice(0,-1);
});