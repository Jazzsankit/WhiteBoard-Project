function createSticky(){
    let sticky=document.createElement('div');
    sticky.classList.add('sticky');
    
    let header=document.createElement('div');
    header.classList.add('header');
    
    let minimize=document.createElement('div');
    minimize.classList.add('minimize');
    
    let close=document.createElement('div');
    close.classList.add('close');

    let stickyContent = document.createElement('div');
    stickyContent.classList.add('sticky-content');

    header.appendChild(minimize);
    header.appendChild(close);

    sticky.appendChild(header);
    sticky.appendChild(stickyContent);

    document.body.appendChild(sticky);

    minimize.addEventListener("click",function(){
        let stickyContent =  document.querySelector(".sticky-content");
        // console.log(textArea);
        stickyContent.style.display = stickyContent.style.display == 'none' ? 'block' : 'none';
    })

    close.addEventListener("click",function(){
        sticky.remove();
    })

    header.addEventListener('mousedown',function(e){
        initialX=e.clientX;
        initialY=e.clientY;
        isStickyHold=true;
      //  console.log(e);
    })

    sticky.addEventListener('mousemove',function(e){
        if(isStickyHold){
            let finalX = e.clientX;
            let finalY = e.clientY;
            let dy = finalY - initialY;
            let dx = finalX - initialX;
            // console.log(dx , dy);

            let {top , left} = sticky.getBoundingClientRect();

            sticky.style.top = top + dy + "px";
            sticky.style.left = left + dx + "px";

            initialX = finalX;
            initialY = finalY;
        }

    })

    sticky.addEventListener('mouseup',function(){
        isStickyHold=false;
        console.log('up')
    })


    return stickyContent;
    
}