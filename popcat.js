const cat = document.getElementById("cat");
const score = document.getElementById("score");

let sc=0;

function onCatMouseUp(){
    cat.src = "./img/normal.png";
}

function onCatMouseDown(){
    cat.src = "./img/waaaa.png";
    
    const audio = new Audio("./pop.mp3");
    audio.play();

    sc += 1;
    score.innerText = sc;
}

cat.addEventListener("mousedown", onCatMouseDown);
cat.addEventListener("mouseup", onCatMouseUp);