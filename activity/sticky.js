let stickynotes =  document.querySelector('#stickyNote');
let minimize = document.querySelector('.minimize');
let close = document.querySelector('.close');
let header = document.querySelector('.header');



let initialX;
let initialY;
isStickyHold=false;

stickynotes.addEventListener('click',function(){

   

    // let sticky=document.createElement('div');
    // sticky.classList.add('sticky');
    
    // let header=document.createElement('div');
    // header.classList.add('header');
    
    // let minimize=document.createElement('div');
    // minimize.classList.add('minimize');
    
    // let close=document.createElement('div');
    // close.classList.add('close');

    // let textArea = document.createElement('div');
    // textArea.classList.add('text-area');

    let stickyContent=createSticky();

    let textarea=document.createElement('textarea');
    stickyContent.appendChild(textarea);
  //  textarea.classList.add('textarea');

//   header.appendChild(minimize);
//   header.appendChild(close);
//   textArea.appendChild(textarea)

//   sticky.appendChild(header);
//   sticky.appendChild(textArea);

    textarea.setAttribute("class" , "textArea");
    textarea.setAttribute("rows" , "10");
    textarea.setAttribute("cols" , "30");

    // document.body.appendChild(sticky);

    // minimize.addEventListener("click",function(){
    //     let textArea =  document.querySelector(".textArea");
    //     console.log(textArea);
    //     textArea.style.display = textArea.style.display == 'none' ? 'block' : 'none';
    // })

    // close.addEventListener("click",function(){
    //     sticky.remove();
    // })

    // let stickyMove=document.querySelectorAll('#canvas , .sticky');

    // header.addEventListener('mousedown',function(e){
    //     initialX=e.clientX;
    //     initialY=e.clientY;
    //     isStickyHold=true;
    //   //  console.log(e);
    // })

    // sticky.addEventListener('mousemove',function(e){
    //     if(isStickyHold){
    //         let finalX = e.clientX;
    //         let finalY = e.clientY;
    //         let dy = finalY - initialY;
    //         let dx = finalX - initialX;
    //         // console.log(dx , dy);

    //         let {top , left} = sticky.getBoundingClientRect();

    //         sticky.style.top = top + dy + "px";
    //         sticky.style.left = left + dx + "px";

    //         initialX = finalX;
    //         initialY = finalY;
    //     }

    // })

    // sticky.addEventListener('mouseup',function(){
    //     isStickyHold=false;
    //     console.log('up')
    // })

})


