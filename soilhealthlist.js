function renderTable(data) {
    var farms = data.feed.entry;
    var container = document.getElementById('somListContainer');
    var table = document.createElement('table');
    table.setAttribute('class', 'som-table');
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
        'Address',
        'Farm/Ranch',
        'Trend',
        'Relative',
        'Most recent SOM%'
    ];
    var tr = document.createElement('tr');
    for (var i=0; i < headings.length; i++) {
        var th = document.createElement('th');
        th.textContent = headings[i];
        if ([2, 3, 4].indexOf(i) > -1) {
            th.setAttribute('class', 'u-center');
        }
        tr.appendChild(th);
    }
    var thead = document.createElement('thead');
    thead.appendChild(tr);
    return thead;
}


function _getRowValue(row, key) {
    return row['gsx$' + key].$t;
}


function buildRow(row) {
    TREND_UP_CLASS = 'som-trend-up';
    UP = 'up';

    var _get = function(key) {
        return _getRowValue(row, key);
    };

    var _isTrendData = function(colIndex) {
        return colIndex == 2 || colIndex == 3;
    };

    var _renderArrow = function(td, value) {
        if (value == UP) {
            td.setAttribute('class', TREND_UP_CLASS);
        }
    };

    var values = [
        _get('state') + ', ' + _get('country'),
        _get('farmname'),
        _get('trend'),
        _get('relative'),
        _get('som'),
    ];
    var tr = document.createElement('tr');
    for (var i=0; i < values.length; i++) {
        var td = document.createElement('td');
        var value = values[i];
        if (_isTrendData(i)) {
            _renderArrow(td, value);
        } else {
            td.textContent = value;
        }
        if (i == 4) {
            td.setAttribute('class', 'u-center');
        }
        tr.appendChild(td);
    }
    return tr;
}
