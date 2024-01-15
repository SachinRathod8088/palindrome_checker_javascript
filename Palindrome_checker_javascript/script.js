function ispalindrome(str){
    const cleanstr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanstr)

    const reversedstr=cleanstr.split('').reverse().join('');
    console.log(reversedstr)

    return cleanstr===reversedstr;
}

function palindromechecker(){

const inputtext=document.getElementById("inputtext");
const result=document.getElementById("result")

if (ispalindrome(inputtext.value)){
        result.textContent=`"${inputtext.value}" is a palindrome`;
}else{
    result.textContent=`"${inputtext.value}" is not a palindrome`;
}
result.classList.add('fadein');
inputtext.value="";

}

document.getElementById("checkbutton").addEventListener('click',palindromechecker);
