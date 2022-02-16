let nDisk;
let start;
let destination;
let middle;


 const tower_move = function (nDisk, start, destination, middle) {
     if( nDisk === 1){
        console.log(`Move disk ${nDisk} ${start} - ${destination}`);
     } else {
        tower_move(nDisk-1, start, middle, destination)
        console.log(`Move disk ${nDisk } ${start}  -  ${destination}`);
        tower_move(nDisk-1, middle, destination, start)
     }
 }
 
tower_move(4, "A", "C", "B");

