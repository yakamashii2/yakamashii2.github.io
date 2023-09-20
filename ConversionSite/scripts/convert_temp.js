window.addEventListener("DOMContentLoaded", domLoaded);
//const controller = new AbortController;
// When the DOM has finished loading, add the event listeners.
var boolC = false;
var boolF = false;
function domLoaded() {
   // TODO: Use addEventListener() to register a click event handler for the convert button.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#add_a_simple_listener
   
   //document.getElementById("C_in").addEventListener("click", convC(), {signal: controller.signal});
   //document.getElementById("F_in").addEventListener("click", convF(), {signal: controller.signal});

   document.getElementById("C_in").addEventListener("input", function(){	
      boolC = true;
      boolF = false;
      document.getElementById("F_in").value = "";
   });
   document.getElementById("F_in").addEventListener("input", function(){	
      boolF = true;
      boolC = false;
      document.getElementById("C_in").value = "";
   });
   document.getElementById("convertButton").addEventListener("click", function(){
      if(boolF == false && boolC == false){
         //put in a value monkey god damn
         document.getElementById("C_in").value = "";
         document.getElementById("F_in").value = "";
      }else if(boolF == true){
         //convert F to C
         document.getElementById("C_in").value = convertCtoF(document.getElementById("F_in").value);
         document.getElementById("F_in").value = "";
         
      }else if(boolC == true){
         //convert C to F
         document.getElementById("F_in").value = convertFtoC(document.getElementById("C_in").value);
         document.getElementById("C_in").value = "";
         
      }else {
         //brick the code
      }
   } );
   // Add event listeners to handle clearing the box that WAS NOT clicked,
   // e.g., the element C_in listens for 'input', with a callback fn to
   // execute after that event does happen. 
   // You don't send arguments to the event handler function.
   // So, if you want the event handler to call another function that
   // DOES take arguments, you can send that other function as a callback.
   // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#event_listener_with_anonymous_function
   // Here is an example of anonymous event handler fn that calls alert with an argument:
   // document.getElementById("weatherIcon").addEventListener("click", function() {alert("You clicked the icon.")})

}
// TODO: (Part of the above is to write the functions to be executed when the event handlers are invoked.)

function convertCtoF(C) {
   return (C * (9/5) + 32);
   // TODO: Return temp in °F. 
   // °F = °C * 9/5 + 32
}

function convertFtoC(F) {
   return ((F - 32) * (5/9));
   // TODO: Return temp in °C. 
   // °C = (°F - 32) * 5/9
}

// TODO: write a fn that can be called with every temp conversion
// to display the correct weather icon.
// Based on degrees Fahrenheit:
// 32 or less, but above -200: cold
// 90 or more, but below 200: hot
// between hot and cold: cool
// 200 or more, -200 or less: dead
// both input fields are blank: C-F
