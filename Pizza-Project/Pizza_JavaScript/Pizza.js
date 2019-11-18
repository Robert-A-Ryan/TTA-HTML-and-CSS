function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>"
        }
    }
    if (selectedSize == undefined) {
        alert("You must select a pizza size.")
        return;
    } else if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getVegi(runningTotal,text1);
}

function getVegi(runningTotal,text1) {
    var vegiTotal = 0;
    var selectedVegi = [];
    var vegiArray = document.getElementsByClassName("vegis");
    for (var i = 0; i < vegiArray.length; i++) {
        if (vegiArray[i].checked) {
            selectedVegi.push(vegiArray[i].value);
            console.log("selected vegitable item: ("+vegiArray[i].value+")");
            text1 = text1+vegiArray[i].value+"<br>";
        }
    }
    var vegiCount = selectedVegi.length;
    if (vegiCount > 1) {
        vegiTotal = (vegiCount - 1);
    } else {
        vegiTotal = 0;
    }
    runningTotal = (runningTotal + vegiTotal);
    console.log("total selected vegi items: "+vegiCount);
    console.log(vegiCount+" vegi - 1 free vegi = "+"$"+vegiTotal+".00");
    console.log("vegi text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getMeat(runningTotal,text1);
}

function getMeat(runningTotal,text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var i = 0; i < meatArray.length; i++) {
        if (meatArray[i].checked) {
            selectedMeat.push(meatArray[i].value);
            console.log("selected meat item: ("+meatArray[i].value+")");
            text1 = text1+meatArray[i].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = (runningTotal + meatTotal);
    console.log("total selected meat items: "+meatCount);
    console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
    console.log("meat text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
}