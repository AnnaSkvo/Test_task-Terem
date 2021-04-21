const myForm = document.forms.myForm;

myForm.onsubmit = async (e) => {
    e.preventDefault();

    function getValue(val) {
        return document.getElementById(val).value
    }

    const data = {
        value1: getValue('val1'),
        value2: getValue('val2'),
        value3: getValue('val3'),
        value4: getValue('val4'),
        value5: getValue('val5'),
        value6: getValue('val6'),
        value7: getValue('val7'),
    };
    document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data)}</pre>`;

    fetch("./src/data.json", {
        method: "GET",
    }).then((res) => {
        if (res.ok) {
            return res.json()
        }
    }).then(data => alert(JSON.stringify(data)));
};