// Script for tabs, gets info from JQuery UI library
//......................................................................................
$(function () {
  $("#tabs").tabs();
});

// Run function when DOM is loaded
//......................................................................................
$(document).ready(billingFunction);
$(document).ready(newTable);
// $(document).ready(newOptionMachine);
// $(document).ready(newOptionLocation);
// $(document).ready(newOptionBatch);


// Expected data from file
//......................................................................................
var pricat = [
  //Distributor[0];Total[1];ALU[2];PET[3];HDPE[4];Glass[5];Other plactics[6];Other material[7]
  "CocaCola;738;157;315;132;245;13;0",
  "Newcastle;249;33;0;0;216;7;0",
  "Heineken;591;125;104;0;312;0;50",
  "Carlsberg;576;327;123;0;120;6;0",
  "Corona;327;126;0;0;201;9;0",
  "Sommersby;86;45;0;0;54;12;0",
  "Cristal;78;13;28;7;15;15;0",
  "Fosters;146;75;17;0;54;0;0",
  "Guinness;327;126;0;0;201;0;0",
  "Miller;86;45;0;0;54;13;0",
  "Pepsi;591;175;50;0;312;0;54",
  "RedBull;591;125;104;0;312;0;50",
  "Smirnoff;159;0;0;0;148;0;11",
  "Sol;146;75;17;0;54;0;0"
];

// Sort and split the pricat
function sortPricat(pricatLine) {
  var result = pricatLine.split(";");
  return result;
};

// // Table function
// //.............................................................
// function newTable() {

//   var table = document.getElementById("tableBody");

//   // Run thrugh pricat and insert row and cells in the table for each data string
//   for (var i = 0; i < pricat.length; i++) {

//     var row = table.insertRow(i);

//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     var cell5 = row.insertCell(4);
//     var cell6 = row.insertCell(5);
//     var cell7 = row.insertCell(6);
//     var cell8 = row.insertCell(7);
//     var cell9 = row.insertCell(8);

//     var result = sortPricat(pricat[i]);

//     // Insert data to the cells from pricat
//     cell1.innerHTML = '<button type="button" class="btn">Export invoice <img src="img/exportblaa.png" alt="Export icon" style="padding-left:1em;"></button>';
//     cell2.innerHTML = result[0];
//     cell3.innerHTML = result[1];
//     cell4.innerHTML = result[2];
//     cell5.innerHTML = result[3];
//     cell6.innerHTML = result[4];
//     cell7.innerHTML = result[5];
//     cell8.innerHTML = result[6];
//     cell9.innerHTML = result[7];
//   }
// };


// Sort table on search (external script)
//.............................................................
function sortTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("AATable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}




// MNJ TEST
//......................................................................................
var pricatMNJ = [
  //Location[0];Machine[1];Batch[2];Distributor[3];Material[4];Color[5];Total[6];ALU[7];PET[8];HDPE[9];Glass[10];Other plactics[11];Other material[12]
  "Buffalo;HLZ151256;2019112119351753;CocaCola;1;15;738;157;315;132;245;13;0",
  "Buffalo;HLZ151256;2019112119351753;Newcastle;1;15;249;33;0;0;216;7;0",
  "Buffalo;HLZ151256;2019112119351754;Heineken;1;15;591;125;104;0;312;0;50",
  "Rochester;HLZ151245;2019112119351796;Carlsberg;1;15;576;327;123;0;120;6;0",
  "Rochester;HLZ151245;2019112119351796;Corona;1;15;327;126;0;0;201;9;0",
  "Syracuse;HLZ151275;2019112119351712;Sommersby;1;15;86;45;0;0;54;12;0",
  "Syracuse;HLZ151275;2019112119351712;Cristal;1;15;78;13;28;7;15;15;0",
  "Rochester;HLZ151246;2019112119351740;Fosters;1;15;146;75;17;0;54;0;0",
  "Syracuse;HLZ151275;2019112119351712;Guinness;1;15;327;126;0;0;201;0;0",
  "Rochester;HLZ151246;2019112119351740;Miller;1;15;86;45;0;0;54;13;0",
  "Syracuse;HLZ151276;2019112119351777;Pepsi;1;15;591;175;50;0;312;0;54",
  "Syracuse;HLZ151276;2019112119351777;RedBull;1;15;591;125;104;0;312;0;50",
  "Rochester;HLZ151245;2019112119351799;Smirnoff;1;15;159;0;0;0;148;0;11",
  "Buffalo;HLZ151256;2019112119351754;Sol;1;15;146;75;17;0;54;0;0"
];

// Sort and split the pricat
function sortPricatMNJ(pricatMNJLine) {
  var resultMNJ = pricatMNJLine.split(";");
  return resultMNJ;
};




// // Option values from pricat to machine input field
// //.............................................................
// function newOptionMachine() {
//   // Create variable for a new array later containing values of all machine numbers from the pricat
//   var newArray = [];

//   // Create an array only with machine numbers from pricat
//   // ...................................
//   // Run thrugh pricat
//   for (var i = 0; i < pricatMNJ.length; i++) {
//     var resultMNJ = sortPricatMNJ(pricatMNJ[i]);

//     // Push the maschine values from the pricat into the new array
//     newArray.push(resultMNJ[1]);

//   }

//   // Run this new array thrug the getUnique funcion, which sorts out dublicates
//   // ...................................
//   // Create variable for the dublicate-free array
//   var txt = getUnique(newArray);


//   // Create options for the select box based on the dublicate-free array
//   // ...................................
//   // Run thrugh the no-duboicate-array
//   for (var i = 0; i < txt.length; i++) {

//     var x = document.getElementById("machine");
//     var option = document.createElement("option");

//     // Insert the values from the no-dublicate-array to an option
//     option.text = txt[i];

//     // Create option in x
//     x.add(option);
//   }
// };




// // Option values from pricat to location input field
// //.............................................................
// function newOptionLocation() {

//   // Create variable for a new array later containing values of all locations from the pricat
//   var newArray = [];

//   // Create an array only with locations from pricat
//   // ...................................
//   // Run thrugh pricat
//   for (var i = 0; i < pricatMNJ.length; i++) {
//     var resultMNJ = sortPricatMNJ(pricatMNJ[i]);

//     // Push the locations from the pricat into the new array
//     newArray.push(resultMNJ[0]);

//   }

//   // Run this new array thrug the getUnique funcion, which sorts out dublicates
//   // ...................................
//   // Create variable for the dublicate-free array
//   var txt = getUnique(newArray);


//   // Create options for the select box based on the dublicate-free array
//   // ...................................
//   // Run thrugh the no-duboicate-array
//   for (var i = 0; i < txt.length; i++) {

//     var x = document.getElementById("locations");
//     var option = document.createElement("option");

//     // Insert the values from the no-dublicate-array to an option
//     option.text = txt[i];

//     // Create option in x
//     x.add(option);
//   }

// };




// // Option values from pricat to batch input field
// //.............................................................
// function newOptionBatch() {

//   // Create variable for a new array later containing values of all batch numbers from the pricat
//   var newArray = [];

//   // Create an array only with batch from pricat
//   // ...................................
//   // Run thrugh pricat
//   for (var i = 0; i < pricatMNJ.length; i++) {
//     var resultMNJ = sortPricatMNJ(pricatMNJ[i]);

//     // Push the batch from the pricat into the new array
//     newArray.push(resultMNJ[2]);

//   }

//   // Run this new array thrug the getUnique funcion, which sorts out dublicates
//   // ...................................
//   // Create variable for the dublicate-free array
//   var txt = getUnique(newArray);


//   // Create options for the select box based on the dublicate-free array
//   // ...................................
//   // Run thrugh the no-duboicate-array
//   for (var i = 0; i < txt.length; i++) {

//     var x = document.getElementById("batch");
//     var option = document.createElement("option");

//     // Insert the values from the no-dublicate-array to an option
//     option.text = txt[i];

//     // Create option in x
//     x.add(option);
//   }

// };




// // Sort out dublicates (External script)
// // https://www.tutorialrepublic.com/faq/how-to-remove-duplicate-values-from-a-javascript-array.php
// //.............................................................
// function getUnique(array) {
//   var uniqueArray = [];

//   // Run thrugh an array
//   for (i = 0; i < array.length; i++) {

//     // If a value isn´t in the array allready...
//     if (uniqueArray.indexOf(array[i]) === -1) {
//       // ...push it in there
//       uniqueArray.push(array[i]);
//     }
//   }
//   // The output is a new array without dublicates
//   return uniqueArray;
// }



// Text from input fields to current .dataInfo
//.............................................................
var currentLocation;
var currentMachine;
var currentBatch;

function curLocation() {
  currentLocation = document.getElementById("locations").value;
  document.getElementById("curLocationB").innerHTML = 'Location: ' + '<strong>' + currentLocation + '</strong>';
  document.getElementById("curLocationS").innerHTML = 'Location: ' + '<strong>' + currentLocation + '</strong>';
  // newTable();
};

function curMachine() {
  currentMachine = document.getElementById("machine").value;
  document.getElementById("curMachineB").innerHTML = 'Machine: ' + '<strong>' + currentMachine + '</strong>';
  document.getElementById("curMachineS").innerHTML = 'Machine: ' + '<strong>' + currentMachine + '</strong>';
  // newTable();
};

function curBatch() {
  currentBatch = document.getElementById("batch").value;
  document.getElementById("curBatchB").innerHTML = 'Batch: ' + '<strong>' + currentBatch + '</strong>';
  document.getElementById("curBatchS").innerHTML = 'Batch: ' + '<strong>' + currentBatch + '</strong>';
  // newTable();
};





// Table function
//.............................................................
function newTable() {

  var table = document.getElementById("tableBody");

  //Clear tabelbody (daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript)
  for (var i = table.rows.length - 1; i > -1; i--) {
    table.deleteRow(i);
  };

  curLocation();
  curMachine();
  curBatch();
  // Run thrugh pricat and insert row and cells in the table for each data string
  for (var i = 0; i < pricatMNJ.length; i++) {

    var result = sortPricatMNJ(pricatMNJ[i]);

    var resLok = result[0];
    var resMac = result[1];
    var resBat = result[2];

    if (currentBatch == resBat && currentMachine == resMac && currentLocation == resLok) {
      var row = table.insertRow();

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);

      // var result = sortPricatMNJ(pricatMNJ[i]);

      // Insert data to the cells from pricat
      cell1.innerHTML = '<button type="button" class="btn">Export invoice <img src="img/exportblaa.png" alt="Export icon" style="padding-left:1em;"></button>';
      cell2.innerHTML = result[3];
      cell3.innerHTML = result[6];
      cell4.innerHTML = result[7];
      cell5.innerHTML = result[8];
      cell6.innerHTML = result[9];
      cell7.innerHTML = result[10];
      cell8.innerHTML = result[11];
      cell9.innerHTML = result[12];


    } else if ((currentBatch == resBat && currentMachine == resMac && currentLocation == "") || (currentBatch == resBat && currentMachine == "" && currentLocation == resLok) || (currentBatch == "" && currentMachine == resMac && currentLocation == resLok)) {
      var row = table.insertRow();

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);

      // var result = sortPricatMNJ(pricatMNJ[i]);

      // Insert data to the cells from pricat
      cell1.innerHTML = '<button type="button" class="btn">Export invoice <img src="img/exportblaa.png" alt="Export icon" style="padding-left:1em;"></button>';
      cell2.innerHTML = result[3];
      cell3.innerHTML = result[6];
      cell4.innerHTML = result[7];
      cell5.innerHTML = result[8];
      cell6.innerHTML = result[9];
      cell7.innerHTML = result[10];
      cell8.innerHTML = result[11];
      cell9.innerHTML = result[12];



    } else if (currentBatch == resBat && currentMachine == "" && currentLocation == "" || currentBatch == "" && currentMachine == resMac && currentLocation == "" || currentBatch == "" && currentMachine == "" && currentLocation == resLok) {
      var row = table.insertRow();

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);

      // var result = sortPricatMNJ(pricatMNJ[i]);

      // Insert data to the cells from pricat
      cell1.innerHTML = '<button type="button" class="btn">Export invoice <img src="img/exportblaa.png" alt="Export icon" style="padding-left:1em;"></button>';
      cell2.innerHTML = result[3];
      cell3.innerHTML = result[6];
      cell4.innerHTML = result[7];
      cell5.innerHTML = result[8];
      cell6.innerHTML = result[9];
      cell7.innerHTML = result[10];
      cell8.innerHTML = result[11];
      cell9.innerHTML = result[12];
    } else {}
  }
 


};





// Tab functions
//...................................................................................
function billingFunction() {
  var liStat = document.getElementById("liStatistics");
  var liBill = document.getElementById("liBilling");
  liStat.style.backgroundColor = "var(--grey)";
  liBill.style.backgroundColor = "transparent";
  liBill.style.fontWeight = "bold";
  liStat.style.fontWeight = "normal";
}

function statisticsFunction() {
  var liStat = document.getElementById("liStatistics");
  var liBill = document.getElementById("liBilling");
  liBill.style.backgroundColor = "var(--grey)";
  liStat.style.backgroundColor = "transparent";
  liStat.style.fontWeight = "bold";
  liBill.style.fontWeight = "normal";
}


                // var sel1 = document.querySelector('#locations');
                // var sel2 = document.querySelector('#machine');
                // var options2 = sel2.querySelectorAll('option');

                // function giveSelection(selValue) {
                //     sel2.innerHTML = '';
                //     for (var i = 0; i < options2.length; i++) {
                //         if (options2[i].dataset.all === selValue || options2[i].dataset.always === selValue || options2[
                //                 i].dataset.buffalo === selValue || options2[i].dataset
                //             .rochester === selValue || options2[i].dataset.syracuse === selValue) {
                //             sel2.appendChild(options2[i]);
                //         }
                //     }
                // }

                // giveSelection(sel1.value);

                var sel1 = document.querySelector('#locations');
                var sel2 = document.querySelector('#machine');
                var options2 = sel2.querySelectorAll('option');

                var sel3 = document.querySelector('#batch');
                // var sel4 = document.querySelector('#machine');
                var options3 = sel3.querySelectorAll('option');


                function giveSelection(selValue, selValue2, where) {
                    selValue2.innerHTML = '';
                    for (var i = 0; i < where.length; i++) {
                        if (where[i].dataset.all === selValue || where[i].dataset.always === selValue || where[i]
                            .dataset.buffalo === selValue || where[i].dataset.rochester === selValue || where[i].dataset
                            .syracuse === selValue || where[i].dataset.machine56 === selValue || where[i].dataset
                            .machine45 === selValue || where[i].dataset.machine46 === selValue || where[i].dataset
                            .machine75 === selValue || where[i].dataset.machine76 === selValue) {
                            selValue2.appendChild(where[i]);
                        }
                    }
                }

                giveSelection(sel1.value, sel2, options2);
                giveSelection(sel1.value, sel3, options3);
                giveSelection(sel2.value, sel3, options3);
          