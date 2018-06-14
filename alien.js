var $tbody = document.querySelector('tbody');
var $stateInput = document.querySelector('#date_time');
var $searchButton = document.querySelector('#search');

$searchButton.addEventListener('click', handleSearchButtonClick);

var my_data = dataSet;

function renderTable() {
    $tbody.innerHTML = '';
    for (var i = 0; i < my_data.length; i++) {
        var address = my_data[i];
        var fields = Object.keys(address);
        var $row = $tbody.insertRow(i);
        for (var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = address[field];
        }
    }
}

function handleSearchButtonClick() {
    var filterDateTime = $stateInput.value.trim();
    my_data = dataSet.filter(function(address) {
        var sightingDate = address.datetime.toLowerCase();
        return sightingDate === filterDateTime;
    });
    renderTable();
}

renderTable();