const pinMatch = document.getElementById('pin-match');
pinMatch.style.display = 'none';

const pinNoMatch = document.getElementById('pin-no-match');
pinNoMatch.style.display = 'none';


const genarateBtn = document.getElementById('genarate-btn');
genarateBtn.addEventListener('click', function(){
    
    const pinGenerator = document.getElementById('pin-generator').value;
    let  pinCreate = Math.random(pinGenerator);
    let newPin = Math.round(pinCreate * 9999); 
    if(newPin > 999 && newPin < 10000){
        document.getElementById('pin-generator').value = newPin;
        
    }
})


function calculate(num){
    const inputSelection = document.getElementById('input-selection').value;
    const inputNewSelection = inputSelection + num;
    if(inputNewSelection < 10000){
        document.getElementById('input-selection').value = inputNewSelection;
    }
    
}


const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function(){
    const pinGenerator = document.getElementById('pin-generator').value;
    const pinGeneratorInput = parseInt(pinGenerator);

    const inputSelection = document.getElementById('input-selection').value;
    const inputNewSelection = parseInt(inputSelection);
   
    document.getElementById('input-selection').value = " ";

    if(inputSelection == 0 || pinGenerator == 0){
        document.getElementById('try-Left').innerText = "Plese Frist Genarat pin";
        document.getElementById('try').style.display = 'none';

    }
    else if(pinGeneratorInput == inputNewSelection){
        const pinMatch = document.getElementById('pin-match');
        pinMatch.style.display = 'block';
        const pinNoMatch = document.getElementById('pin-no-match');
        pinNoMatch.style.display = 'none';

        document.getElementById('try-Left').innerText = "try left";
        document.getElementById('try').style.display = 'inline';
    }
    else{
        const pinNoMatch = document.getElementById('pin-no-match');
        pinNoMatch.style.display = 'block';
        const pinMatch = document.getElementById('pin-match');
        pinMatch.style.display = 'none';

        const threeTry = document.getElementById('try').innerText;
        let totalTry = threeTry;
        if(threeTry > 0 ){
            totalTry = threeTry - 1;
            document.getElementById('try-Left').innerText = "try left";
            document.getElementById('try').style.display = 'inline';
        }
        
        document.getElementById('try').innerText = totalTry;

        
    }
})

const clearOneBtn = document.getElementById('clear-one-btn');
clearOneBtn.addEventListener('click', function(){
    const inputSelection = document.getElementById('input-selection').value;
    const clearNewOneBtn = inputSelection.toString();
    const clearNewOneBtnValue = clearNewOneBtn.substring(0, clearNewOneBtn.length - 1);
    document.getElementById('input-selection').value = clearNewOneBtnValue;
})

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', function(){
    document.getElementById('input-selection').value = "";
})



