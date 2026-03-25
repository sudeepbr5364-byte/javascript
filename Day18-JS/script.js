let btn = document.getElementById("addBtn");
btn.addEventListener("click", function() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    if (task === ""){
        alert("Enter a task.");
        return;
    }
    let li = document.createElement("li");
    li.innerText = task;
    let delBtn = document.createElement("button");
delBtn.innerText = "Delete";

delBtn.addEventListener("click", function(){
  li.remove();   
});

li.appendChild(delBtn);
    document.getElementById("list").appendChild(li);
    input.value = "";

});
let clearBtn = document.getElementById("clearAll");

clearBtn.addEventListener("click", function(){
  document.getElementById("list").innerHTML = "";
});