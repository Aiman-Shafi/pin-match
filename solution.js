 //Notify None 

        document.querySelector(".notify-section").style.display = "none";

        //Generating Pin
        
        function generatePin(){
            document.querySelector(".generatedPin").value = Math.floor(Math.random()*(9000) + 1000);
            document.querySelector(".generatedPin").style.textAlign ="center"
            
        }

        //Showing input 

        function inputValue(number){
            const showInput = document.querySelector(".showValue")
            showInput.value = showInput.value + number;
            showInput.style.textAlign ="center"

        }

        //Remove element

        function removeElement(){
            
           const currentValue =  document.querySelector(".showValue").value
           const newCurrentValue = currentValue.substring(0, currentValue.length - 1)
           document.querySelector(".showValue").value = newCurrentValue   


        }

        //Check Pin

        function checkPin(){
                const newPin = document.querySelector(".showValue").value

                const generatedPin = document.querySelector(".generatedPin").value

                if(newPin == generatedPin){
                   document.querySelector(".notify-section").style.display="block"
                   document.querySelector(".correct-pin").style.display= "block"
                   document.querySelector(".wrong-pin").style.display= "none"
                   document.querySelector(".action-left").style.display ="none"
                   document.querySelector(".submit-btn").disabled = true;
                   document.querySelector(".generate-btn").disabled = true;
                   document.querySelector(".submit-btn").style.backgroundColor = 'green';
                   document.querySelector(".generate-btn").style.backgroundColor = 'green';
                 
                   

                }

                else{

                    document.querySelector(".notify-section").style.display="block"
                    document.querySelector(".wrong-pin").style.display ="block";
                    document.querySelector(".correct-pin").style.display ="none";
                    document.querySelector(".action-left").style.display ="block";

                    const tryLeft = document.querySelector("#tryLeft").innerText
                    let newTryLeft = parseInt(tryLeft);
                    if(newTryLeft > 0){
                        newTryLeft = newTryLeft - 1 ;
                    }
                    document.querySelector("#tryLeft").innerText = newTryLeft;  
                    
                    if(newTryLeft === 0){
                        document.querySelector(".submit-btn").disabled = true;
                        document.querySelector(".submit-btn").style.backgroundColor = 'red';
                        document.querySelector(".generate-btn").style.backgroundColor = 'red';
                    }
                }
                
                document.querySelector(".showValue").value = "";
            
                
                
        }

        function clearValue() {
             document.querySelector(".showValue").value = null;
        }
