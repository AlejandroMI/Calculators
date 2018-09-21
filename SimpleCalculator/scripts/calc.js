
//Here is the code used for the logic of the calculator
//We have to wait to the page to load so...

window.onload = function(){

  //Creating values for each element that we want to take as input
  var buttons = document.getElementById('buttons');
  var clear = document.getElementById('clear');
  var answer = document.getElementById('answer');

  //We add a listener where 'e' is the reference of the element: e.target;
  //The problem here is that if we click on the space between botons we also
  //get a input. So we are gonna filter this input to only receive <li> inputs.
  buttons.addEventListener('click' , function(e) {

    //Filter
    if(e.target.nodeName === 'LI'){

      //Get the value from the button clicked.
      var value = e.target.innerHTML;

      //If we click equal we want to calculate the result, otherwise, put they
      //numbers on the answer field.
      if(value=== '='){
        //Now we us a try and catch structure to avoid the user input invalid
        //operations.
        try{
          //What we do here is to use eval to get the strign and compute it
          if(answer.innerHTML == ''){
            answer.innerHTML = 'WRITE SOMETHING ASSHOLE!';
            setTimeout(clear => answer.innerHTML = '',1500);
          }else{
            answer.innerHTML = eval(answer.innerHTML);
          }
        }catch(e){
          var prev = answer.innerHTML;
          answer.innerHTML = 'HEY! LITTLE CUNT';
          setTimeout(back => answer.innerHTML = prev,1000);
        }
      }else{
        answer.innerHTML += value;
      }
    }//If filter

  });//End of button listener

  //Clear button listener
  clear.addEventListener('click' , function(e) {
    answer.innerHTML='';
  });//End of clear listener

}
