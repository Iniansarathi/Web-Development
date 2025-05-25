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
        operator = "*"
       }
       else if (expression.includes("/"))
       {
        operator = "/"
       }

       let parts = expression.split(operator);
       A = Number(parts[0])
       B = Number(parts[1])
      

       if (operator == "+")
       {
       outval = A + B;
       }
       else if (operator == "-")
       {
        outval = A - B;
       }
       else if (operator == "X")
       {
        outval = A * B;
       }
       else if (operator == "/")
       {
        outval = A / B;
       }
       output.textContent= outval

           
    }