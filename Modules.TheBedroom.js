async function btnPlayButton_onClick() {
   document.getElementById("btnPlayButton").style.opacity = 0;
   
   await new Promise(r => setTimeout(r, 3000));
   document.getElementById("btnPlayButton").style.display = "none";
   
   document.getElementById("vidCridimal").style.display = "inline";
   await new Promise(r => setTimeout(r, 10));

   document.getElementById("vidCridimal").style.opacity = 100;
   document.getElementById("vidCridimal").play();
}

async function btnDanger_onClick() {
    document.getElementById("btnPlayButton").style.opacity = 0;
   
    await new Promise(r => setTimeout(r, 3000));
    document.getElementById("btnPlayButton").style.display = "none";
    
    document.getElementById("vidCridimal").style.display = "inline";
    await new Promise(r => setTimeout(r, 10));
 
    document.getElementById("vidCridimal").style.opacity = 100;
    document.getElementById("vidCridimal").play();
}