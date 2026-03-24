let btn = document.getElementById("btn");
btn.addEventListener("click",
    function(){
        document.getElementById("text").innerText = "Button Clicked!";
    }
);

btn.addEventListener("mouseover",
    function(){
        document.getElementById("text").innerText = "Hovering!";
    }
);
btn.addEventListener("mouseout",
    function(){
        document.getElementById("text").innerText = "Mouse Out!";
    }
);  