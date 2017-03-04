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
    var headings = [
        'Country',
        'State',
        'Farm/Ranch',
        'Trend',
        'Most recent SOM%'
    ];
    var tr = document.createElement('tr');
    for (var i=0; i < headings.length; i++) {
        var th = document.createElement('th');
        th.textContent = headings[i];
        tr.appendChild(th);
    }
    var thead = document.createElement('thead');
    thead.appendChild(tr);
    return thead;
}


function buildRow(row) {
    var fields = [
        'gsx$country',
        'gsx$state',
        'gsx$farmname',
        'gsx$trend',
        'gsx$som',
    ];
    var tr = document.createElement('tr');
    for (var i=0; i < fields.length; i++) {
        var td = document.createElement('td');
        td.textContent = row[fields[i]].$t;
        tr.appendChild(td);
    }
    return tr;
}
