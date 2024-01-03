const getpasswordinput=document.getElementById("password");
const len=12;

const upercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const specialChars="!@#$%^&*()-_=+[{]}|<.>/?~";

const allChars=upercase+lowercase+numbers+specialChars;

function createPass(){
    let pass="";
    pass=pass+ upercase[Math.floor(Math.random()*upercase.length)];
    pass=pass+ lowercase[Math.floor(Math.random()*lowercase.length)];
    pass=pass+ numbers[Math.floor(Math.random()*numbers.length)];
    pass=pass+ specialChars[Math.floor(Math.random()*specialChars.length)];

    while(len>pass.length){
        pass=pass+allChars[Math.floor(Math.random()*allChars.length)];
    }
    getpasswordinput.value=pass;
}

function copyPass(){
    const copytext= getpasswordinput.value;
    //getpasswordinput.select();
    // document.execCommand("copy");
    navigator.clipboard.writeText(copytext);
}

