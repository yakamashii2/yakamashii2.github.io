const temp1 = document.getElementById("temp1")
const temp2 = document.getElementById("temp2")
const plistner = document.getElementById("add")
const mlistner = document.getElementById("sub")
const multlistner = document.getElementById("mult")
const dlistner = document.getElementById("divi")
const glistner = document.getElementById("gte")
const llistner = document.getElementById("lte")

plistner.addEventListener("click", function(){add()})
mlistner.addEventListener("click", function(){sub()})
multlistner.addEventListener("click", function(){multi()})
dlistner.addEventListener("click", function(){divide()})
glistner.addEventListener("click", function(){gte()})
llistner.addEventListener("click", function(){lte()})

function add(){
    document.getElementById("symbol").innerHTML = "+"
    temp3 = +temp1.value + +temp2.value
    document.getElementById("output").innerHTML = temp3
}
function sub(){
    document.getElementById("symbol").innerHTML = "-"
    temp3 = +temp1.value - +temp2.value
    document.getElementById("output").innerHTML = temp3
}
function multi(){
    document.getElementById("symbol").innerHTML = "X"
    temp3 = +temp1.value * +temp2.value
    document.getElementById("output").innerHTML = temp3
}
function divide(){
    if(temp1.value === "" && temp2.value === ""){
        document.getElementById("symbol").innerHTML = "/"
        document.getElementById("output").innerHTML = 0
    }else{
        document.getElementById("symbol").innerHTML = "/"
        temp3 = +temp1.value / +temp2.value
        document.getElementById("output").innerHTML = temp3
    }
}
function gte(){
    document.getElementById("symbol").innerHTML = "≥"
    if(temp1.value === "" && temp2.value === ""){
        document.getElementById("output").innerHTML = ""
    }
    if(+temp1.value >= +temp2.value){
        document.getElementById("output").innerHTML = "True"
    }else{
        document.getElementById("output").innerHTML = "False"
    }
    
    
}
function lte(){
    document.getElementById("symbol").innerHTML = "≤"
    if(temp1.value === "" && temp2.value === ""){
        document.getElementById("output").innerHTML = ""
    }
    if(+temp1.value <= +temp2.value){
        document.getElementById("output").innerHTML = "True"
    }else{
        document.getElementById("output").innerHTML = "False"
    }
}