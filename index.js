const user_input = document.querySelector("#input1");
document.querySelector("#button1").addEventListener("click", reverseWords);
var show_expected = document.querySelector("#text1");
user_input.focus();


document.getElementById("button_clear").addEventListener("click" , changeText);
function changeText (){
    location.reload();
    return false;
}





// reverseWords(user_input)

function reverseWords() {
    var message = user_input.value;
    var input = message.split(' ').reverse().join(' ');
    show_expected.innerHTML=input;
    console.log(input);
    
    
    
}


