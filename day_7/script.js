

const values_elements = document.getElementsByTagName('td');

for (const value_element of values_elements) {

    if (value_element.innerText == '-') continue;

    let float_value = Number(value_element.innerText.replace('%', ''));

    if (float_value > 0) {
        value_element.style.setProperty('color', 'green');
    } else {
        value_element.style.setProperty('color', 'red');
    }
}

