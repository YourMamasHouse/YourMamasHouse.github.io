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

   document.getElementById("audioScaryAlert").play();
}

async function btnAlertButton_onClick() {
    await transitionSection("vwDanger", "vwVideo");

    document.getElementById("vidCridimal").play();
}

//#endregion