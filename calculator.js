document.addEventListener("DOMContentLoaded", function () {
    const output = document.getElementById("output");
    const buttons = document.querySelectorAll(".buttons button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        const buttonText = button.textContent;
        
        if (buttonText === "CE") {
          output.value = "";
        } else if (buttonText === "=") {
          try {
            output.value = eval(output.value);
          } catch (error) {
            output.value = "Error";
          }
        } else {
          output.value += buttonText;
        }
      });
    });
  });
  