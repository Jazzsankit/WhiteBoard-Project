let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");

let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");

let pencilColors = document.querySelectorAll(".pencil-colors div");
let pencilSize = document.querySelector("#pencilSize");
let eraserSize = document.querySelector("#eraserSize");




// ctx.lineWidth = 40;

// let activeTool = "pencil";
let pencilWidth=1;
let eraserWidth=1;
let pencilColorSelected="black";

for(let i=0;i<pencilColors.length;i++){
   // let color=
    pencilColors[i].addEventListener('click',function(){
        ctx.strokeStyle=pencilColors[i].className;
        // ctx.strokeStyle="red";
        pencilColorSelected=pencilColors[i].className;
    })
}

pencilSize.addEventListener("change",function(e){
    console.log(pencilSize.value);
    pencilSize=e.target.value;
    ctx.lineWidth=e.target.value;
   
})

eraserSize.addEventListener("change",function(e){
    console.log(e.target.value);
    eraserWidth=e.target.value;
    ctx.lineWidth=e.target.value;
})


pencil.addEventListener("click" , function(){
    if( !pencil.classList.contains("active-tool")){
        eraser.classList.remove("active-tool");
        eraserOptions.classList.add("hide");
        pencil.classList.add("active-tool");
        ctx.strokeStyle = pencilColorSelected;
        ctx.lineWidth=pencilSize;
    }
    else{
        // already active hai tool
        if(pencilOptions.classList.contains("hide")){
            pencilOptions.classList.remove("hide");
        }
        else{
            pencilOptions.classList.add("hide");
        }
    }
})


eraser.addEventListener("click" , function(){
    if(  !eraser.classList.contains("active-tool") ){
        pencil.classList.remove("active-tool");
        pencilOptions.classList.add("hide");
        eraser.classList.add("active-tool");
        ctx.strokeStyle = "white";
        ctx.lineWidth=eraserWidth;
    }
    else{
        // already active hai tool
        if(eraserOptions.classList.contains("hide")){
            eraserOptions.classList.remove("hide");
        }
        else{
            eraserOptions.classList.add("hide");
        }
    }
})









undo.addEventListener("click", function () {
  // you will get the latest line
  if(pointsDb.length){
      let latestLine = pointsDb.pop();
      redoPoints.push(latestLine);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPoints();
  }
});

redo.addEventListener("click" , function(){
    
    if(redoPoints.length){
        let line = redoPoints.pop();
        pointsDb.push(line);
        console.log(line.strokeStyle);
        

        for(let i=0 ; i<line.length ; i++){
            ctx.strokeStyle=line[i].strokeStyle;
            ctx.lineWidth=line[i].lineWidth;
            if(line[i].id == "md"){
                ctx.beginPath();
                ctx.moveTo(line[i].x , line[i].y);
            }
            else{
                ctx.lineTo(line[i].x , line[i].y);
                ctx.stroke();
            }
        }
    }

})


function drawPoints() {
  for (let i = 0; i < pointsDb.length; i++) {
    let line = pointsDb[i];
    if(line.length){
    ctx.strokeStyle=line[0].strokeStyle;
    ctx.lineWidth=line[0].lineWidth;
    }
    for(let j=0 ; j<line.length ; j++){
        if(line[j].id == "md"){
            ctx.beginPath();
            ctx.moveTo(line[j].x , line[j].y);
        }
        else{
            ctx.lineTo(line[j].x , line[j].y);
            ctx.stroke();
        }
    }
  }
}
