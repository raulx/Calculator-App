import React ,{useState} from 'react';
import useSound from 'use-sound';
import button from '../sounds/buttons.wav';
import operator from '../sounds/equal.wav';
import equal from '../sounds/operator.wav';
import resetSound from '../sounds/click-button.mp3';

import SingleButton from './SingleButton';
import Screen from './Screen.jsx';

const Display = [];

const userInput = [];

const operators = [];

function CalculatorUI(){
    const [displayText,setDisplay] = useState(0);
    const [playButton] = useSound(button)
    const [playEqual] = useSound(equal)
    const [playOperator] = useSound(operator)
    const [playReset] = useSound(resetSound);
    function handleClick(event){
        const clickedButton = event.target.innerText;
        Display.push(clickedButton)
        const currentUserInput = parseFloat(Display.join(''))
        setDisplay(currentUserInput);
        playButton();
    };
    function handleOperation(event){
        Display.length = 0;
        setDisplay(0);
        const operator = event.target.innerText;
        userInput.push(displayText)
        operators.push(operator)
        playOperator();
    }
    function checkResult(userInput,operators){
        
        let sum = userInput[0];
        for(let i=1;i<userInput.length+1;i++){
            let currentValue = userInput[i];
            if (operators[i-1] ==="+"){
                sum += currentValue
            }
            else if (operators[i-1] ==="*"){
                sum *= currentValue
            }
            else if (operators[i-1] ==="-"){
                sum -= currentValue
            }
            else if (operators[i-1] ==="/"){
                sum /= currentValue
            }

        }
        return Math.round(sum * 100)/100
    }

    function showResult(){
        userInput.push(displayText)
        console.log(userInput);
        let result = checkResult(userInput,operators);
        setDisplay(result)
        Display.length = 0;
        userInput.length = 0;
        operators.length = 0;
        playEqual();

    }

    function reset(){
        setDisplay(0)
        Display.length = 0;
        userInput.length = 0;
        operators.length = 0;
        playReset()
    }
   
    return  <div className='compdiv'><div className='buttondiv'>
    <div className='reset'><Screen displayText={displayText}/><SingleButton style={{backgroundColor:'red',color:'white'}} handleClick={reset} innerValue={'AC'}/></div>
    <div className='buttonRow'><SingleButton handleClick = {handleClick} innerValue={'7'}/><SingleButton handleClick = {handleClick} innerValue={'8'}/><SingleButton handleClick={handleClick}  innerValue={'9'}/><SingleButton handleClick = {handleOperation}innerValue= {'/'}/></div>
        <div className='buttonRow'><SingleButton handleClick = {handleClick} innerValue={'4'}/><SingleButton handleClick = {handleClick} innerValue={'5'}/><SingleButton handleClick = {handleClick} innerValue={'6'}/><SingleButton handleClick = {handleOperation}innerValue={'*'}/></div>
        <div className='buttonRow'><SingleButton handleClick = {handleClick} innerValue={'1'}/><SingleButton handleClick = {handleClick} innerValue={'2'}/><SingleButton handleClick= {handleClick}  innerValue={'3'}/><SingleButton handleClick = {handleOperation}innerValue={'-'}/></div>
        <div className='buttonRow'><SingleButton handleClick = {handleClick} innerValue={'0'}/><SingleButton handleClick = {handleClick} innerValue={'.'}/><SingleButton handleClick = {handleOperation} innerValue={'+'}/><SingleButton style={{backgroundColor:'orange',color:'white',fontSize:'2rem'}} handleClick = {showResult} innerValue={'='}/></div>
    </div></div>
}

export default CalculatorUI

 // function handleOperation(event){
    //     const operator = event.target.innerText;
    //     setcorrentOperation(operator)
    //     Display.length = 0;
    //     inputNum.push(parseFloat(displayText))
    //     console.log(inputNum)
    //     if (inputNum.length >= 1){
    //         if (operator === '+'){
    //            inputNum.map((n)=>{
    //             return sum += n;
    //            })
    //            inputNum.length = 0;
    //         }
    //         console.log(inputNum)
    //     }
    //     else{
           
    //         setDisplay(0);
    //     }
    //     console.log(inputNum);
    // }
    // function displayResult(){
    //     setDisplay(sum)
    // }