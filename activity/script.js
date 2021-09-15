const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d'); // getContext("2d") => context dega jisse drawing ho skti hai

let toolBox  = document.querySelector('.toolbox');
let toolButton = document.querySelector('.tool-button')

// object destructuring
let { top : topOffSet} = canvas.getBoundingClientRect();

canvas.height = window.innerHeight - topOffSet;
canvas.width = window.innerWidth;

window.addEventListener("resize" , function(){
    canvas.height = window.innerHeight - topOffSet;
    canvas.width = window.innerWidth;
    drawPoints();
})

let isPenDown = false;

let pointsDb = [];
let redoPoints = [];

let line = [];

canvas.addEventListener("mousedown" , function(e){
    if(redoPoints.length){
        redoPoints = [];
    }
    isPenDown = true;
    let x = e.clientX;
    let y= e.clientY-topOffSet;
    ctx.beginPath();
    ctx.moveTo(x,y);
    let point = {
        id:"md",
        x : x ,
        y : y,
        strokeStyle : ctx.strokeStyle,
        lineWidth: ctx.lineWidth
    }
    socket.emit('mousedown',point);
    line.push(point);
})
canvas.addEventListener("mousemove" , function(e){
    if(isPenDown){
        let x = e.clientX;
        let y= e.clientY-topOffSet;
        ctx.lineTo(x,y);
        ctx.stroke();
        let point = {
            id:"mm",
            x : x ,
            y : y,
            strokeStyle : ctx.strokeStyle,
            lineWidth: ctx.lineWidth
        }
        socket.emit('mousemove',point);
        line.push(point);
    }
})

canvas.addEventListener("mouseup" , function(e){
   isPenDown = false;
   pointsDb.push(line);
   console.log(pointsDb);
   line = [];
})

toolButton.addEventListener("click",function(){
    // console.log('click');
    toolBox.style.display = toolBox.style.display=='none'?'flex':'none'
})