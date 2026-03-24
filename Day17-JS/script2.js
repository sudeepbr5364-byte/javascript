let input = document.getElementById("inputBox");

input.addEventListener("keyup", function(){
     document.getElementById("result").innerText = input.value;
});
input.addEventListener("keyup", function(){
    document.getElementById("characterCounter").innerText = "Length: " + input.value.length;
}
);