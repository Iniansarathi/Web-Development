let input = document.getElementById("in")
let output =document.getElementById("out")

    function clickbtn(event)
    {
        let val = event.textContent;
        input.textContent += val;
    }
    function reset()
    {
        input.textContent="";
        output.textContent=""
    }
    function equal()
    {
       let A,B,outval;
       
       let operator;
       let expression = input.textContent
       if (expression.includes("+"))
       {
        operator = "+";
       }
       else if (expression.includes("-"))
       {
        operator = "-"
       }
       else if (expression.includes("X"))
       {
        operator = "X"
       }
       else if (expression.includes("/"))
       {
        operator = "/"
       }
       
       let parts = expression.split(operator);
       A = Number(parts[0])
       B = Number(parts[1])
       console.log(expression, operator, parts, A, B);
      

       if (operator == "+")
       {
       outval = parseFloat((A + B).toFixed(2))
       }
       else if (operator == "-")
       {
        outval = parseFloat((A - B).toFixed(2))
       }
       else if (operator == "X")
       {
        outval = parseFloat((A * B).toFixed(2))
       }
       else if (operator == "/")
       {
        outval = parseFloat((A / B).toFixed(2))
       }
       output.textContent= outval

           
    }