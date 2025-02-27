const inputArea=document.querySelector("#number-input");
const resultArea=document.querySelector("#resultArea");

const calculate=()=>
{
    let inputValue=Number(inputArea.value);
    let calculatedValue=10;
     
    while(inputValue>1)
    {
       if(inputValue %2===0)
       {
        
        inputValue=inputValue/2
        console.log(inputValue)
       }else
       {
        
        inputValue=inputValue*3+1
        console.log(inputValue)
       }

    }
    
    console.log(inputValue)
}