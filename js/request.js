//program checks text area for length


var max = 180;

function Check(max){
    var Charcount = document.getElementById("reason").value.length;
    var remaining = max - Charcount;
    if (Charcount < max){
        document.getElementById("submit").disabled = false;
        document.getElementById("count").textContent = remaining + " Characters remaining";
    }
    else{
        document.getElementById("submit").disabled = true;
        document.getElementById("count").textContent = "Too many characters";
    }
}

document.getElementById("reason").addEventListener("keyup", function(){Check(max)}, false);