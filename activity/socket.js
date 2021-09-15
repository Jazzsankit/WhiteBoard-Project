socket.on('md',function(data){
    let myStrokeStyle=ctx.strokeStyle;
    ctx.strokeStyle=data.strokeStyle;

    let myStrokeWidth=ctx.lineWidth;
    ctx.lineWidth=data.lineWidth;

    ctx.beginPath();
    ctx.moveTo(data.x,data.y);

    ctx.strokeStyle=myStrokeStyle;
    ctx.lineWidth=myStrokeWidth;
})
socket.on('mv',function(data){
    let myStrokeStyle=ctx.strokeStyle;
    ctx.strokeStyle=data.strokeStyle;

    let myStrokeWidth=ctx.lineWidth;
    ctx.lineWidth=data.lineWidth;

    ctx.lineTo(data.x,data.y);
    ctx.stroke();

    ctx.lineWidth=myStrokeWidth;
    ctx.strokeStyle=myStrokeStyle;
})