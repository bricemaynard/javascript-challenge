// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(function(UFOData) {
            var row = tbody.append("tr");
        Object.entries(UFOData).forEach(function([key, value]) {
            var cell = row.append("td");
        cell.text(value);
         }); 
});


var filter = d3.select("#filter-btn");

filter.on("click", function() {

    tbody.html("");

    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(UFOData => UFOData.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
       
        var row = tbody.append("tr");
        
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});

var filter1 = d3.select("#filter-btn1");

filter1.on("click", function() {

    tbody.html("");

    var inputField1 = d3.select("#city");
    var inputValue1 = inputField1.property("value");

    console.log(inputValue1);

    var filteredData1 = tableData.filter(UFOData => UFOData.city === inputValue1);

    console.log(filteredData1);

    filteredData1.forEach(function(selections) {

        console.log(selections);
       
        var row = tbody.append("tr");
        
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});