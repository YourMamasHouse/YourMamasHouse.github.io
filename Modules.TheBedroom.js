async function transitionSection(oldSection, newSection) {
    // Transition
    document.getElementById(oldSection).style.opacity = 0;

    // Display none after transition finished
    await new Promise(r => setTimeout(r, 3000));
    document.getElementById(oldSection).style.display = "none";

    // Display new section
    document.getElementById(newSection).style.display = "inline";
    await new Promise(r => setTimeout(r, 10));

    // Start new section transition
    document.getElementById(newSection).style.opacity = 100;
}

//#region event listeners

async function btnPlayButton_onClick() {
   await transitionSection("vwPlayButton", "vwDanger");

   document.getElementById("btnAlertButton").addEventListener("mouseover",() => {
        document.getElementById("audioThud").play();
   });

   document.getElementById("audioScaryAlert").play();
   await new Promise(r => setTimeout(r, 1000));

   document.getElementById("audioAlarm").play(); 
   document.getElementById("audioOhMyGod").play();
}

async function btnAlertButton_onClick() {
    document.getElementById("audioSus").play(); 
    await transitionSection("vwDanger", "vwVideo");

    document.getElementsByClassName("walterRight")[0].classList.add("visible");
    document.getElementsByClassName("walterLeft")[0].classList.add("visible");

    document.getElementById("vidCridimal").play();

    // Move to shop
    await new Promise(r => setTimeout(r, 15000));
    await transitionSection("vwVideo", "vwShop");
    setUpShop();
}

function setUpShop()
{
    document.getElementById("imgSuperLaserPiss").addEventListener("click", () => openTab("Ohio-Piss-by-ghargrove15/114865771.WFLAH"));
    document.getElementById("imgWhyCridimal").addEventListener("click", () => openTab("Why-you-a-cridimal-by-ghargrove15/114846598.WFLAH"));
    document.getElementById("imgCridimal").addEventListener("click", () => openTab("Cridimal-by-ghargrove15/114846822.WFLAH"));
    document.getElementById("imgWalterShirt").addEventListener("click", () => openTab("Walter-Cridimal-by-ghargrove15/114846382.WFLAH"));
    document.getElementById("imgKanye").addEventListener("click", () => openTab("Kanye-by-ghargrove15/114847213.WFLAH"));
}

function openTab(itemName)
{
    var url = "https://www.redbubble.com/i/t-shirt/" + itemName;

    window.open(
        url, "_blank");
}
//#endregion