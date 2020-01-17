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
// var pricat = [
//   //Distributor[0];Total[1];ALU[2];PET[3];HDPE[4];Glass[5];Other plactics[6];Other material[7]
//   "CocaCola;738;157;315;132;245;13;0",
//   "Newcastle;249;33;0;0;216;7;0",
//   "Heineken;591;125;104;0;312;0;50",
//   "Carlsberg;576;327;123;0;120;6;0",
//   "Corona;327;126;0;0;201;9;0",
//   "Sommersby;86;45;0;0;54;12;0",
//   "Cristal;78;13;28;7;15;15;0",
//   "Fosters;146;75;17;0;54;0;0",
//   "Guinness;327;126;0;0;201;0;0",
//   "Miller;86;45;0;0;54;13;0",
//   "Pepsi;591;175;50;0;312;0;54",
//   "RedBull;591;125;104;0;312;0;50",
//   "Smirnoff;159;0;0;0;148;0;11",
//   "Sol;146;75;17;0;54;0;0"
// ];

// // Sort and split the pricat
// function sortPricat(pricatLine) {
//   var result = pricatLine.split(";");
//   return result;
// };

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
  "Buffalo;HLZ151256;2019112119351754;Sol;1;15;146;75;17;0;54;0;0",
  "Buffalo;HLZ151256;2019112119351754;NO_READ;1;15;4;;;;;;",
  "Syracuse;HLZ151276;2019112119351777;NO_READ;1;15;5;;;;;;",
  "Rochester;HLZ151245;2019112119351799;NO_READ;1;15;3;;;;;;"
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

  var all = "All";


  if (currentLocation == all) {
    for (var i = 0; i < pricatMNJ.length; i++) {

      var result = sortPricatMNJ(pricatMNJ[i]);
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
    }
  };

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
      cell1.innerHTML = '<button type="button" class="btn">Export invoice <img src="img/exportblaa.png" alt="Export icon"></button>';
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
  var liPerf = document.getElementById("liPerformance");
  liStat.style.backgroundColor = "var(--grey)";
  liBill.style.backgroundColor = "transparent";
  liPerf.style.backgroundColor = "var(--grey)";
  liBill.style.fontWeight = "bold";
  liStat.style.fontWeight = "normal";
  liPerf.style.fontWeight = "normal";
}

function statisticsFunction() {
  var liStat = document.getElementById("liStatistics");
  var liBill = document.getElementById("liBilling");
  var liPerf = document.getElementById("liPerformance");
  liBill.style.backgroundColor = "var(--grey)";
  liStat.style.backgroundColor = "transparent";
  liPerf.style.backgroundColor = "var(--grey)";
  liStat.style.fontWeight = "bold";
  liBill.style.fontWeight = "normal";
  liPerf.style.fontWeight = "normal";
}

function performanceFunction() {
  var liStat = document.getElementById("liStatistics");
  var liBill = document.getElementById("liBilling");
  var liPerf = document.getElementById("liPerformance");
  liBill.style.backgroundColor = "var(--grey)";
  liStat.style.backgroundColor = "var(--grey)";
  liPerf.style.backgroundColor = "transparent";
  liStat.style.fontWeight = "normal";
  liBill.style.fontWeight = "normal";
  liPerf.style.fontWeight = "bold";
}


// PDF function

document.getElementById('exportPDF').addEventListener('click',
  generatePDF);


function generatePDF() {

  var doc = new jsPDF('p', 'pt', 'a4');
  doc.setFontSize(10);
  var elementHandler = {
    '.ignorePDF': function (element, renderer) {
      return true;
    }
  };
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;

  var img = "data:image/jpeg;base64,/9j/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAgICAgICAgICAgMDAwMDAwMDAwMBAQEBAQEBAgEBAgICAQICAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA//dAAQAGf/uAA5BZG9iZQBkwAAAAAH/wAARCABLAMgDABEAAREBAhEB/8QAswABAAEEAgMBAAAAAAAAAAAAAAoGBwgJBQsBAwQCAQEAAQUBAQEAAAAAAAAAAAAAAQIFBgcIAwkEEAAABgICAQIEAQYNBQAAAAABAgMEBQYABwgRCRITFBUWIVE3UlV2lNMKGCIjOVhhd5KXtLXVFzEyQaERAAEDAwMBBQMJBQcFAAAAAAEAAgMEBREGEiExBxMiQVEUYXEjMkJ0gZGxssIIFTQ1cyQ2N0N1w/BSU6Gzwf/aAAwDAAABEQIRAD8An8YRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRf//Qn8YRMImETCJhEwiYRanuR/lZiOO132TXXHDjmXsKlabfps9m7mpuqmyuqoVP5ZHTLl9GWt5NpR79kwjpRIyyjs8cmmYfuYCCVQc9s2g5LxTQzC422GpqRmOF8p708kAFgbkEkHAG77+FpXVfbRBpW41dK+w3+qt9A7FRVRUwNMwbWvJbIXhrg1rgSXFgHrjBP42l5leIuqYrjPbpYuxJnXPKOp2O20q/V6st38dAo1V8WHmYS0QvzROzksTOxG+WnbMWb0CPCiUT+gPcxQ9nOoK+Stp4+5bWUMjWPjc7BduGQ5rsbdpb4suLePfwovPb1oeyw2iun9qktV5gklimZGC1gjO1zJGbu83h/wAmWsY/D+M45VnIbywaY5f6+5maBY673Ho3cdN41bwsrSn7hgGFcmJiFjtfywO1GycfLv3URZIxGRbOV49yRJT4ZUFm6i5E1jJXKTQVy09V227Pmpqq3SVsLS+FxcATIMZyAC04IDhnkYIBIzYaftqsGurZf9Mx0tfbr9T2irkEVUxsb3MbC7ONrnFsjQ5rixwB2nc0uAcW4ReMTnzqvg9419IjsWA2LsS57o5GbSqOsdY6viGNiv1qVSkINB+/iIqWmIVu6YNJmRaMvQksZwu/kEUkkjiZQSZNrfSldqfWdV7G+GGmpqOJ8skpLY28OwCQHEEgF3IwGtJJHGdedkHaXZuzvsltxusVVVXC4XWoip6enaHzSHcwOLWucwFoc5rODuL3tDWnJI2f7n8s1F1XeHGo6xx05Dbz3JTqLF7A3lr/AEtWom7m0HGP41lKvIbYNii5VeGVssK1kEgdEjjPI5NU3t/G+voBwi26Bqq+lFwnrKOlt0kpjgkmcWd+QSAY2kZ2kg43Ydjnbhbhv/bZbbLcTY6O1XS5X6CmbNVw0kbZvY2uaHFk72uLO8aHDcGFzAeO8zwePs/mo4eVai8YNpPTX42teT6mxWsVbBh4VIuspTVbivs7pCbNhxsJ5lhLxruyNiJJxqMmm8IYqrc6qCqKilUHZtqKeqrqFvde20Pdksy75QS7ix0R24IIafnFuOhAIIHlWftAaEo7bZ7zJ7T+6bwZw2Taz+zupywSsqG797XNMjQBGJA75zS5paXV/rnyZV/bWlde7l15xp5J21HZstsVlXqjXqYwnLBFxmu55rBPJa3jDyr5rBBLGfIqtkkjPAEphAVOvQY+OahsM2nbo61VMsUkzGNcXMzt8TQcAkAnGcZwPgs/0LrKk15pyPUtBBPT0kssjGslDRJhji3Lg0uA3YyAHH4nqqsZeSHTL3SF93QFV2K2U1baIOobD1y9iIpleqzLWGSUiY1R01eTDeLMxXfN10wMLkixTt1CKJEOX0DZu7O7Hqsv3DCp2I8pGh5bY9JpZ6rs+Jq+w3LGNqe0pqtJxdNlZR6s3YqA2+LeJSjiHjplwDBy9SRUIg6KYTFBAPfx3TsZ4ym4Kp9peRjUuutuS+n4ekbT2nOU4i7jYsjraspz0dSWrEEzTCrwnxqL199PJqlGQOmkVs1EfbFYViqJECMkZ4CbhnCwJ8dHIPXmhtFcndubGmZAtXJt2JSi02bZV7NWOWlomQcR0RCR7lZuC8tIoJCp6VVEU0kkzKLKJppnOWuRpc4AdcKGnAOVsD1/z+pNqtExRLnqjcGnr2hRJ3Y9Wquxq0jDyN9rEBESc28+mgO8L6pQY6GdKFSWKkgIN1AKsYyZyl8zGQMgghVZVF0vymcebs5iCM4u8xjAafcbrdpSUimBmuvIuqpyh2rSc+UyUoL+XsoxpAZN2XvmEXjcphKocyZJMTgo3BXB0tztrG4Xrx2tprdmt9fJ06yX9htjYFWaxevnlUqgEPMSSk82knTQnspqdgDc7so+kezB12MFmPMZQH7lQUV5OtSvpauP5PWW6Kvp+42dSn1bfFjqKUfrqVmU3Dlr7oOxfHcJRiirJYfWAHcplSOKzdL2lgSnuz6jPom4fYvovPkz1HSrZtfX5debbsd71VPv4V1Xa9XGEkadaQx3/wA9tDN40lXCcbVoRBkVRw4elQUAjhISpGD3BTCMnB4wU3LKTjhyO15yg1yhsbXasgizJIOYabgppJs3na7NtCIrLR0mg0dPWogq1cpLoKpKnTVRVKPZTgchKXNLTgqQcq/mUqV//9GfxhF6F3TZsBRcuEG4HEQIK6qaQGEPuIFFQxfUIB+GEXz/ADWM/SLD9sb/ALzGCifNYz9IsP2xv+8xgonzWM/SLD9sb/vMYKJ81jP0kw/bG/7zGCi9Bp+CIcUzTUSVQD+2KZpFmBwOI+kCCQVgMBxMPXXXfeVBjiMgHCo7xgONwz8VDI5I2Xfe3eQfP7WXLaD50W/ZKcdeIfhzo3R/1Qy0Seuj9VIRtsscTEqpRcrTmFWaREgs8KkqWVapvvjjKuvbTJ0hZoLVb7Raa2wOtcdHlhq55tpn3eHLWk8h5cXtAyNp27cNyTwHqur1LfdT6mtGt49Rz3YNmZa6Ok7wUez5QNkka0hrohGInl2CJGiTvC5+0Cldb6y2AvTPAG2X11clwqO+dvLXBs6ps4qnXGi3MyuTaS9hQXjDEi2asQcHRTuAImKPagD0AiHvW11IKnVjmzR/KUkOwh7fEfY3Dw88nPHHnwvxWmz3R1B2ZMdSVBEFyqjKDE/5MG6xvBeC3wjb4suwMcrNnlhQrk98yG/LFF0m0u4SR4E7hjyTsfWZheJkJdxxguEW0ZklG7E7J4/Xcgk1TTA5jmVAiRQE4AXMasNXTN7OqSGSWMSi6wnaXDIHtLCTjOQOp+HPRbC1rbK+Tt5uVVDTzOp36aqm72xvLXONvlaBuDcFxOGgZznDevC1jcbND8nuKun+K3kmoFUvexn2rd53qhXPRNip0i6Xq1LlxTYhI1OJeR76TjW13Sl5dq5k0GhVI6Tcs1kwOPudZterrY77ca/RlXJFC2elZIydrwNzxzh5BAJZhhDSfE0OBxwtQaS01rDRlisvazbIKmrko7jNDLRvicTHE7jdG0tLmiYOla6QNyyR0bhnlXhtUOtq3lryJ3tsW6eR/WWg+Yj8+5tK7j4aGe1g9haW+wythca/3LFyBWToZfX4y72EXh1HCD6MkGgq/DLMHjdwa3QSCusFHaqOKzT3a3DuZoazDtpY0N7yEjIxJhrw8Atc043BzSBfq2B1m1vddSXWo1XR6ZvzvaqSqtWY94le55hqmuwd0O58RiLg+N7d2x0b2PPnYXF6hV6E8UQcf6JyatOmr5yv2ZbrPDcitfNEbpAJE2Tx3psoNhgqjEGrkRR7ZD1o71mZVRX4xt7p1DgJTpJqO+VU0t+/e8tDHcYqCNjXU8h2O+TqHja553F7S7BxjBxjyJm6aOttLT6KGmKa7zWCpvdRLI2ugAlYPaKGJ29kTe7bDI2Mvbknc3JJ4IG9jyB3TZ0VyP09WrpJ7wrnE6QgPesDrRPzJrN2W2nUnfeh5OQijpKuVU3beLD4NUxvQzOos2IK5hOTmuMDaem73r6Du6+eFr/i9fWxhozyLRDXW+z66ExdtBv6xWLpDzTy7DDBtS0yKCcwqo3VXlJxlFyDc75QplDAooJjGHsRH0z4m9PNR6rK3lzVbAbi/wCN9JhUJx8/riGvTS0dH19+s9jBSplPO9bvmrZmZaPUVcthA5VCkEyhB7ARKPVLT4nKT0C92rbvbOD/AC85Rxd+0ts3YR99Wp3P6tm6LXgmXdoXe2ixTsJGoPHLls0M1mS2oqcgdFRddk9aAU6Bw+5BAewYI4QcFYdV/QO7bVxW2khD68uzaz6y5Rx14sdIjI920mzQ56jKwb15WEytFlZaQrEoUCF+EScCmgsdYCmIQQGouaHc9MKMHH2rJTV0VqHaGyUbfE2jn9fNlUnXW0ZWvqb3axVgrVeO3ollFSsTlkJ8XKopyrh6cjdNoVJNy4H0CBDqgA0nIGPDj3KePerx8L67V6n43NshtfVVxsUFK2u2hcKdXq69QvVkjV/pSKaOYtscI56u6ivUVZBwKhCNgbGP6ygmYQh+TIMFB83lYt6sp229gSG3eP8AxdsG97ZxssemLM2Iy3fFrQMXVLWRFeYia5FvjGTgY6SlZ5FFr6mZGJHhXrgy7cyKBnAVEgYc7G7Pko56DoqGpNT19YKPTtF71kfIpFW2JlGkLJ6ih46PnNZxUuWXetYyXq1cn0UPk8cxYSAKrFO1OumY64onVKcomkkg7m7cJ7jlbBuHNUmYrnRzecSVfmUYkzN7DxEtLRLwqEsyZ2JBmkZKQcNEmz879qyIqp7YiVYf5QF9IB15v+Y1VDqV+/DlW7DW9ZbobWGAma+qvseNVbN5mKfRJ1Ui19Ihjt0XyDcTpkMAFESgIAP2xKckYUNW4zPJVr//0p/GEWjzzaj1RdCffofq26CH3/CHhPv1/Z/8z2h6lUP6KPJ6z/nG/wAQ57qhPWf843+IcInrP+cb/EOEWC/L/mAlpJu81vrh6g93O+agWUlC+26ZamYu0gMk7dJm9aLrYLpA4HZMzgJY0olcuA9z2kszDTGmHXd4ra0EWsHgdDKR/t+p+n0HhyTrbX+v4dLROttuIdf3DBI/yM/7v/q/qYDNP2pVpKU3JrIVXEjLSsps6nqqLOHDmQk5ORd2mPXXcuXCx1XDt44WMZRVU5hMI9mMPXYhtyWICmdDC36BDWge7gAD3fYB7ly9HVufXNra2TA71r3vccAeIZJJ95+JJ8yee5HzmZd4JhEwiYRMImETCLXnu3m3ZNZ7YmqBWdNz1ziNbSMRK7IlItwpISUpQX9MTlZJ5RGUWzeslLbDWefiWSUK+cISUocyhUEE0lEXYwqwzIzlWpW8obN4vNsYLTUs/PF/NgWexFoYWt8wjlZQsNXLb9GR7CMmJ2sRjlUFLM4buEWMOKZ2rZ6/dgKZWVV3fvVcQXkNWUuWuaTd9HzevpC+XiPrHx9huMY3YJQc8xSkYWwwgniCFnZONYOW7qyxXuN/ptu7b+46cqqgljKjZxkFfDPc+71ES8/GxXHybscf9fvafS7O8lHdRjJsI+6RMRIIPo9WGscqxcNavIe60cqFSTlJxRvGlRbgsZymymwY6q3rHyQbJsM3VLDGcfLlAa9kmlfeS1Qkq6vatpqQ11YPpmnWtBWqTylYhGq8UZr82jXRjyEAsRx8WAJpGORlT3YHnyqir/k0lbaKyFV4w3WyfDwkLMp2WIvlXX11Y0JNxe3LmSoVsUZISV1qbSua8fOEpZvFEQdvzosUy+tUFQZUd3jzVzC88jR+r6tsWf1BOKSFr2/cdeFoFSmjWW61avRDPY8vUZ24wYwMfIxVmtEPQUzuopNJdpCmkU1XkimxSVelKNnOM+StrGeSSRVkbJ8005KlQWrLBHWDCEkFZiH2TemTeYlrEembDCObxl0145r4s3zKYYxxPaYNXbpdICKNCqMqru+Oq90N5F7guqlBvuO0zKXWTZxhIevV2zB8A+np6FgnMOaHnn8H3YNSJTaslHyF6M1jmbKQQQZBHKuFD+hlR3Y8jx/z/mFlfxs5Kk5DqbES/wCn87QFtfv6SxVbzj0kieYLc6FBXlB80dMGJYdJBsnNfDC2F0eUbnREJBpHrGBvkqlzdqyhwqV//9OfxhFQl51drXZ6Ec12RQKZfW0Qus6im9xrUPZEY1y4IRJw4YpS7N2RosummUpzEAomKUAH7BkgkdEVu/4qPGD+rvpL/K+l/wDC5O53qVGAn8VHjB/V30l/lfS/+Fxud6lMBRpfN55I+KPCWOmuMvE7TehJTl3MxirS03eP1jQ5GO44RcsxH2ZA3cMsze7ddtHBV4uPVKojFkEj18mYotmrrOdK6UkupFdcQRbQeGn/ADSP0ep8+g8yNT9oPaMzTgdabK4Ovjh4nA8QAj1BB7wj5rcjb853kHQVEG0zYpRUjZGUsE7Lu3b1cS/EyctKP3J1Xsg/drqGVcOnKxxOs4XVMPQepRQwAAiG5Y4wNsMLeSQ1rQPPoGgf+AFy9VVReZK6ukw1rXPkkeeGtAy5zj6AZJ/+k85xccqA1pmwNfO3YoPbQ8uVUTevk+lG8Y3Uno4TxMUcQ+5BEABw4Doy5g6DpMAAc1prQ230E002HVroX5PkwbT4W/qd59Bx10bdtXy6jvlJSUm6OxR1cRa08OlcHtxLKPd1jj6MHJy88dtFnFS+tiYRMImETCJhEwi8AAAIiAAAj9xEA+49B0Hf49AGEXFtYOFYykpOM4mNaTU4lHITUs2YtkZKWQhyOEolGSfJpFcvUoxN4qVuVQxgRBU4E69Q9kXFu6TUX9uiL6+rsU8uUBFSEJB2N00TXlIeLllElJNpGOFQMLEr8USgqZP0nUJ/IEwkEQEmTjHkqpwi4uZhYqww8nX5pihIQ0ywdRknHrgb2HjB6idB02U9BiHAiySggIlEBDv7CA/fCJCwkPW4mMgYCMYw0JDMGsXExUY1RZsI6OYolQZsWbVAhEm7ZsiQCkIUAKUAwi5P0lHoRABEOxAeg+wiHQiH4dgOEQAAOgAAAADoOg/7B+AfgHWEToO++g76676+/X4d/hhEAADvoADsex6/9j+I/wBuEXnCL//Un8YRMImEUZ/zj+cWI4YQ85xc4uTkbPcsp+M+Gttta/CykRx3hpVqB0nbtI4LspHa8kyXKrGxqpTpRiRyPnpBKZs2d51pPSjro4XCvBFuB4HQyEfgweZ8+g8yNSdonaJHYI3WezuDr24eJ3UQAjqfIyEctafmjxO8g6AdVartDfm0Iuq1WLtm1Nu7Utgto+PbC/stxu1xsr9Rw4XXcOFHD+TlZN+4UXdOl1BERE6yxwADnDcEklPR05kkLY6aNvwa1o/ADyH2Bczww1lzrGwwh81dM/gcuc9zj95JPJJ+JU4HUPhtqHje8XPL3auyvldv5g37jdcWNts7NQHkLquvyjNss71tQXPQEXOYxCBMS5QA8gsn7SPpaED3teW7U0l71rboIMttsdYwtHm4g8Pd+keXx6bi1JoODSnZJfqur2vvk1rlD3DkMaRzEz1B6Pd9LoPCBmLfrH8pOvf14qf+/MM6Yrv4Kb+k/wDKV88LP/N6X6zF+dq7WDOEF9oEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCL//Vn8YRMIteXlMuvMvX3Cnblp4J1Vha96x8cAlIKZ5C2V+knbu/q61azrItXDS47HgWQEVjY1celf5xRJJ65SQj3d60/FbJrpHHdnFtIT9hd5Bx+i0+Z/AZIxfWNRfqXT882m2B9yA+Lms53Ojb0dIBy1p68kBxAY7qvKxVdpb62lG1WsxVu2nt/aduM1ZRyHzCyXO63OySCi7lZyu5UcSEnLycg4UXdOXBxMJhOsscAA5w6Akkp6OnMkhbHTRt68BrWgfcAB0A+AXGkMNZc6wQwtfNXTP4HLnve4/eSTySfeSuxt8MPhio/jqozbau1W0LduYN3hQSs1mSBKRhtSQsikU7nXmvHRiCU7k5RBOZmEwA8goUUURKzL/P6T1PqeW9y+z0+WW1h4HQvI+k79LfLqeenVegdA0+lacVtaGyX2Rvid1EQP0Gfqd9LoPD1zt8o/8AR48wP7j7f/pk889Df3vt31pn4qnti/wtvv8Ap0v4LrldY/lJ17+vFT/35hnYtd/BTf0n/lK+VNn/AJvS/WYvztXawZwgvtAmETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRf//Wn8YRMImEWE2rPHdxE0vyh2tzD13qGBgN6bfbIo2OwopJjHRDpcq31RMU2DBIrCqzmwVVCKz7tqUq0ksQTnEDLuhcXWovVyqqCO2TSE0kXQeZ9A4+Yb9EHp9gxj9Hpax0F4mvtLA1txnHid5D/qLR0aX9XkcuPxOc2ctSyBYE+Uf+jx5gf3H2/wD0yeZVob+99u+tM/Fa17Yv8Lb7/p0v4LrldY/lJ17+vFT/AN+YZ2LXfwU39J/5SvlTZ/5vS/WYvztXawZwgvtAmETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRf/Xn8YRMImETCJhFaTfGmaryH05sfR94eTsfUtn1WSqNgfVh2yYWBrGyiYJrrxDyRjpdg3fJ9AJDLNXCff/AJEMHYDcLVcp7RcYbnShhqIJA9ocCWkj1AIOPgR8VZNSWCi1TYavTtxdI2hrIXRPMZDXhrupaXNcAfTLXD1BWm+H/g6fBCCmIecYXDkkV9CS8XMtPdv9EURUcRT9u/SRcJjqsBO2XO3AigFEh/QYfQYpujBsWTtg1VLG6J8dFtc0g/Jv8xj/ALvX0Whqf9lfs3pp46mKe7d5G9rx8tDjLSHAH+z9DjB6HHQg8jfXmql0omETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRf/0J/GETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImETCJhEwiYRMImEX//2Q==";


  //A4 - 595x842 pts
  //https://www.gnu.org/software/gv/manual/html_node/Paper-Keywords-and-paper-size-in-points.html


  doc.addImage(img, 'jpeg', 400, 20, 150, 50); //specify the image format in the function. Can be one among JPEG/PNG.
  doc.text('Redemption Center, NY', 40, 110);
  doc.text('Date:' + ' ' + today, 450, 110)
  doc.text('576 Victoria Dr', 40, 130)
  doc.text('Rochester, NY 14604', 40, 150)

  jsPDF.autoTableSetDefaults({
    StyleDef: {
      fontSize: 8,
      elementHandler
    },
    startY: 250,
    headStyles: {
      fillColor: [64, 104, 127]
    },
    bodyStyles: {
      fillColor: [238, 241, 246]
    },
  })


  doc.autoTable({
    html: '#AATable',
    columnStyles: {
      0: {
        fontSize: 0
      },
      1: {
        cellWidth: 70
      },
      2: {
        cellWidth: 50
      },
      3: {
        cellWidth: 50
      },
      4: {
        cellWidth: 50
      },
      5: {
        cellWidth: 50
      },
      6: {
        cellWidth: 50
      },
      7: {
        cellWidth: 50
      },
      8: {
        cellWidth: 50
      }
    }
  })

  doc.setFontSize(8);
  doc.text('Location:' + ' ' + currentLocation, 450, 170)
  doc.text('Machine:' + ' ' + currentMachine, 450, 190)
  doc.text('Batch:' + ' ' + currentBatch, 450, 210)

  doc.save('invoice.pdf');
};



// https://stackoverflow.com/questions/27673937/two-html-select-boxes-linked-to-each-other

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

// Values for statistics
function billingUnits() {
  unit = document.getElementById("billingUnits").value;
  if (unit == "units") {
    var result = sortPricatMNJ(pricatMNJ[i]);
var g = 2;

    result[3]/g;
    result[6]/g;
    result[7]/g;
    result[8]/g;
    result[9]/g;
    result[10]/g;
    result[11]/g;
    result[12]/g;

    // newTable()
  } 
  // else if (unit == "bags") {} else {}


};
