const tower_1 = document.getElementById("tower_1");
const disk_1 = document.getElementById("disk1");
const disk_2 = document.getElementById("disk2");
const disk_3 = document.getElementById("disk3");
const tower_2 = document.getElementById("tower_2");
const tower_3 = document.getElementById("tower_3");
let towers = document.querySelectorAll(".tower");
const disk_4 = document.getElementById("disk4");
const disk_5 = document.getElementById("disk5");
const disk_6 = document.getElementById("disk6");
const disk_7 = document.getElementById("disk7");
let playerMode = "Pickup";
let hold = null;
let miniMoves=0;
var moves=0,disk=3;
// Minimum Moves counter formula 
miniMoves=Math.pow(2,disk);
miniMoves=miniMoves-1;
console.log("Minimum Moves:"+miniMoves);
document.getElementById('minMoves').innerHTML=miniMoves;
// user moves counter
document.getElementById('moves').innerHTML=moves;

// Remove 'Div' funcation
function removeDiv()
{
    var element =document.getElementById("disk"+disk);
    if(disk===0)
    {
        alert('All Disks are Removed');
    }
    else
    {
      element.parentNode.removeChild(element);
      console.log("Value of the Disk"+disk);
      disk--;
      let miniMoves=Math.pow(2,disk);
      miniMoves=miniMoves-1;
      console.log("Minimum Moves:"+miniMoves);
      document.getElementById('minMoves').innerHTML=miniMoves;
   }
}
   // Add New 'Div' funcation
function addNewDiv()
{
    if(disk===7)
    {
        alert('No more disk you can add');
    }
    else
    {
      var newDiv = document.createElement("div");
      document.getElementById('tower_1').appendChild(newDiv);
      newDiv.id="disk"+ ++disk;
      newDiv.className="disk";
       let miniMoves=Math.pow(2,disk);
      miniMoves=miniMoves-1;
      console.log("Minimum Moves:"+miniMoves);
      document.getElementById('minMoves').innerHTML=miniMoves;
     }
}
 
for (var i = 0; i < towers.length; i++) {
    console.log("Towers Length"+ towers.length,i);
    towers[i].addEventListener('click', isPickupIsputToDestinationTower);
    console.log("towers[i]",towers[i]);
}

function isPickupIsputToDestinationTower(event) {
    console.log(playerMode);
    if (playerMode === "Pickup") {
        pickFromSourceTower(event.currentTarget);
    } else if (playerMode === "Release") {
        putToDestinationTower(event.currentTarget);
    }
}

// PickUp Disk from Tower funcation
const pickFromSourceTower = function (initalDiv) {
    let numberOfDivs = initalDiv.childElementCount;
    console.log(numberOfDivs);
    if (numberOfDivs === 0) {
        alert("This tower is empty, Click another tower");
    } else {
        hold = initalDiv.lastElementChild;
        playerMode = "Release"
    }
    win();
}
// Drop a Disk at Tower funcation
const putToDestinationTower = function (lastDiv) {
    let lastElement = lastDiv.lastElementChild;
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    if (!lastElement) {
        moves++;
        document.getElementById('moves').innerHTML=moves;
        lastDiv.appendChild(hold);
        playerMode = "Pickup"
    } else {
        let currentDiskWidth = lastElement.clientWidth;
        let playerHoldDisk = hold.clientWidth;
        if (currentDiskWidth <= playerHoldDisk) {
            alert("NO NO! Disk is too big, try another tower.");
            playerMode = "Pickup"
        } else {
            moves++;
            document.getElementById('moves').innerHTML=moves;
            lastDiv.appendChild(hold);
            playerMode = "Pickup"
        }
    }
    setTimeout(() => {win();}, 500)
}

const win = function () {
    if (tower_1.childElementCount === 0 && tower_3.childElementCount === disk) {
        console.log("Disk counter"+disk);
        alert('You Won the Game..!!');
    }
}
