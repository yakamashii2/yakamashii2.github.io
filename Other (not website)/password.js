function isStrongPassword(AAAAAAAAAAAAAAAAAAHHHHHHHHH){
    var pLen = AAAAAAAAAAAAAAAAAAHHHHHHHHH.length;
    var num = false;
    for(var i = 0; i<pLen; i++){
        if(AAAAAAAAAAAAAAAAAAHHHHHHHHH.charCodeAt(i) > 47 && AAAAAAAAAAAAAAAAAAHHHHHHHHH.charCodeAt(i) < 58){
            num = true;
        }
    }
    if(pLen < 8){
        console.log("password aint long enough");
        return false;
    } else if(AAAAAAAAAAAAAAAAAAHHHHHHHHH.indexOf("password") != -1){
        console.log("password got the word password in it innit");
        return false;
    } else if(num == false){
        console.log("password aint got numbers");
        return false;
    } else {
        console.log("good 'nough")
        return true
    }
}
console.log("       qwerty1");
isStrongPassword("qwerty1");
console.log("       qwertypassword1");
isStrongPassword("qwertypassword1");
console.log("       qwertyABC");
isStrongPassword("qwertyABC");
console.log("       qwerty123");
isStrongPassword("qwerty123");


//I HATE JAVASCRIPT I HATE JAVA SCRIPT I HATE JAVA SCRIPT