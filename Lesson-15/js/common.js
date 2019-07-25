var table = document.getElementById('table');
var addCol = table.getElementsByClassName('button')[0];

addCol.onclick = function () {
    table.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>');
}

table.addEventListener('click', function (z) {
    var input = document.createElement('input');
    var inputText;

    if (z.target == addCol || z.target.tagName !== 'TD') {
        return;
    }

    inputText = z.target.innerHTML;
    z.target.innerHTML = '';
    z.target.appendChild(input);
    input.value = inputText;
    input.focus();

    var td = z.target;

    input.onblur = function () {
        var text = input.value;
        td.innerHTML = text;
    }

    input.onkeypress = function (event) {
        if (event.keyCode === 13) {
            input.blur();
        }
    }
});