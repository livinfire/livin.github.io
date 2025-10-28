function validate() {
    var value = document.getElementById('input').value;
    var modifier;

    if(isNaN(value)) {
        modifier = 'not ';
    } else {
        modifier = '';
    }

    var report = 'You entered "'+value+'". This is '+modifier+'a valid number';

    document.getElementById('valid').innerHTML = report;
}

function check_range() {
    var value = document.getElementById('input').value;
    var paragraph_list = document.getElementsByTagName('p');
    var first_paragraph = paragraph_list[0];
    var display;

    if(value >= 500) {
        display = 'block';
    }else {
        display = 'none';
    }

    first_paragraph.style.display = display;
}