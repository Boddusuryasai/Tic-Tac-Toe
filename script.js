let mainDiv = document.querySelectorAll("#box")
let boxes = [...mainDiv]
let flag =false
function changeFlag(){
    flag=!flag
    
}
function checkwin(){
    let spanbox = document.querySelectorAll("span")
    if(spanbox[0].innerText !=" " && spanbox[0].innerText===spanbox[4].innerText && spanbox[4].innerText===spanbox[8].innerText){
        console.log("win" , "1");
        return
    }
    
}

boxes.forEach((eachBox)=>{
      let spanbox= eachBox.childNodes[0];
     
      eachBox.addEventListener("click", (e)=>{
        spanbox.innerText= flag?"X":"O";
       changeFlag()
       checkwin()
      })
     
    
})


 
    
