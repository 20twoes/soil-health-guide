function renderTable(data) {
    var farms = data.feed.entry;
    var container = document.getElementById('somListContainer');
    var table = document.createElement('table');
    table.appendChild(buildHeader());
    var body = document.createElement('tbody');
    Array.prototype.forEach.call(farms, function(row, index, array) {
        var tr = buildRow(row);
        body.appendChild(tr);
    });
    table.appendChild(body);
    container.appendChild(table);
}


function buildHeader() {
    var thead = document.createElement('thead');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.textContent = 'Farm Name';
    tr.appendChild(th);
    thead.appendChild(tr);
    return thead;
}


function buildRow(row) {
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.textContent = row.gsx$farmname.$t;
    tr.appendChild(td);
    return tr;
}
