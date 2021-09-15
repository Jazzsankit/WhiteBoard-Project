let imageUpload=document.querySelector('#fileUpload');
let image = document.querySelector('#image');
let download = document.querySelector('#download')

image.addEventListener('click',function(){
    imageUpload.click();
})

imageUpload.addEventListener('change',function(){

    let stickyContent=createSticky();
    
    let fileObject = imageUpload.files[0];
    console.log(fileObject);
  
    let filePath = URL.createObjectURL(fileObject);
    console.log(filePath);
  
    let file=document.createElement('img');
    file.setAttribute('src',filePath);

    stickyContent.appendChild(file);

    // document.body.appendChild(sticky);
})

download.addEventListener("click" , function(){
    let filePath = canvas.toDataURL("image/png");  
    let aTag = document.createElement('a');
    //<a href = "" download = "filename.png"></a>
    aTag.setAttribute("download" , "canvas.png");
    aTag.setAttribute("href" , filePath);
    aTag.click();
    aTag.remove();
})