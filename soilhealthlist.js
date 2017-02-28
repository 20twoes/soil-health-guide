function renderTable(data) {
    var farms = data.feed.entry;
    var container = document.getElementById('somListContainer');
    Array.prototype.forEach.call(farms, function(row, index, array) {
        var tr = buildRow(row);
        container.appendChild(tr);
    });
}


function buildRow(row) {
    var tr = document.createElement('div');
    tr.textContent = row.gsx$farmname.$t;
    return tr;
}
