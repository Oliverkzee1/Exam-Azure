let input= document.querySelector("#input");
let btn= document.querySelector("#btn");
let display= document.querySelector("#display");
let str;
let testArr=[]

function palindrome(a){
    a=input.value;
    for(i=0;i<a.length;i++){

        if(a[i]!==a[a.length-1-i]){
            testArr.push('false')
        }else{
            testArr.push('true')
        }

    }
    if(testArr.indexOf('false')==-1
    ){
        display.innerHTML='true'
    }else{
    display.innerHTML='false'
    }
}


    

btn.addEventListener('click',()=>{
    palindrome(str);
    testArr=[]
}
);