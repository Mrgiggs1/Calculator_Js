// calculator starts

// handles numbers in the screen of a calculator
let buffer = "0";
let runningTotal = 0;
let prevOperator;

// to select the class of html to display on it.
// or use get element by Id then have id on html with same name as getElementbyID built-in function.
const screen = document.querySelector('.screen');


// extrating value from html
function buttonClick(value)
{
    // console.log(value);

    // we check if the value is an operator or a number...NaN means Not a Number
    if(isNaN(value))
    {
        // not a number
        handleSymbol(value);

    }else{

        handleNum(value);
    }
}

// This will reset buffer to 0
function handleSymbol(operators)
{
    //we send the operator to handle math function to deal with that specific operator at the click
    if(operators ==='C')
    {
        buffer = '0';
        runningTotal = 0;

    }else if(operators ==='−'){
        handleMath(operators);
    }else if(operators ==='÷'){
        handleMath(operators);
    }else if(operators ==='×'){
        handleMath(operators);
    }else if(operators ==='+'){
        handleMath(operators);
    }else if(operators === '='){
        if(prevOperator === null)
        {
            return;
        }
        // else call flush function with equal sign along to display all the answers you calculated
        flushOperation(parseInt(buffer));
        prevOperator = null;
        buffer = runningTotal;
        runningTotal = 0;

    }else if(operators ==='←'){
        // if length is 1 then after pressing the arrow then we reset it back to 0
        if(buffer.length === 1)
        {
            buffer = 0;
        }
        else {
            // else if length is of 3 numbers then we take out the last number but 1 unit
            buffer = buffer.substring(0, buffer.length -1);
        }
    }

    
    
    

    screen.innerText = buffer;
}

// if 0 is entered then 1 entered after, 
// 1 will be added to 0 to be 1 else if 2 entered + other number like 0 then results are 20
// but if many 0s are entered then calculator will display only one 0.
function handleNum(num)
{
    if(buffer === "0")
    {
        buffer = num;
    }else{
        buffer = buffer + num;
    }
    // to display on the sceen class of html
    screen.innerText = buffer;
}


function handleMath(operators)
{
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    // if we have zero the we assign the number entered into running total, else we call a function that is going to do operations 
    //for us such as 1+1 or 2*5 math in flushOperator function after being called
    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else 
    {
        flushOperation(intBuffer);
    }

    prevOperator = operators;

    buffer = '0';
}

function flushOperation(intBuffer)
{
    if(prevOperator === '+')
    {
        runningTotal += intBuffer;
    }else if(prevOperator === '−')
    {
        runningTotal -= intBuffer;
    }else if(prevOperator === '×')
    {
        runningTotal *= intBuffer;
    }else if(prevOperator === '÷')
    {
        runningTotal /= intBuffer;
    }
}


// This runs like the main ininitial function
function init()
{
    // we take what is selected in buttons as you click, browser event gets all that related to that value.
    document.querySelector('.cal_buttons')
    .addEventListener('click', function(event){
            // here we need exact value within that event.
            buttonClick(event.target.innerText);
        })
}


// for above function to run is when we can call it
init();