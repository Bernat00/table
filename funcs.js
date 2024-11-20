function renderTable(){
    const table = document.createElement('table');
    createHeader(table);
    createBody(table);

    document.body.appendChild(table);
}

function createHeader(table){
    const header = document.createElement('thead');
    table.appendChild(header);

    createTableCell("Szerelmek", "th")
    createARow(header,
        [
            createTableCell("Szerző neve", "th"),
            createTableCell("Korszak", "th"),
            createTableCell("Szerelmek", "th", 2)
        ]
    );
}

function createBody(table){
    const body = document.createElement('tbody');
    body.id = 'tbody';
    table.appendChild(body);

    createARow(body,[
        createTableCell('Balassi Bálint'),
        createTableCell('reformáció'),
        createTableCell('Losonczy Anna'),
        createTableCell('Dobó Krisztina')
    ]);

    createARow(body,[
        createTableCell('Csokonai Vitéz Mihály'),
        createTableCell('felvilágosodás'),
        createTableCell('Vajda Juliána', 'td', rowSpan=2),
    ]);
    
    createARow(body,[
        createTableCell('Petőfi Sándor'),
        createTableCell('magyar romantika'),
        createTableCell('Mednyánszky Berta'),
        createTableCell('Szendrey Júlia'),
    ]);
    
    createARow(body,[
        createTableCell('Ady Endre'),
        createTableCell('20. század'),
        createTableCell('Léda'),
        createTableCell('Csinszka'),
    ]);
}

function createARowOnlyByData(array){
    let cellArray = [];
     
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        cellArray.push(
            createTableCell(element, 'td', (index == 2 && array.length ==3)? 2:1)
        );
    };

    createARow(document.getElementById('tbody'), cellArray);
}

/**
 * 
 * @param {htmlElement} parent 
 * @param {'td' | 'th'} type 
 * @param {string} content 
 * @returns
 */
function createTableCell(content, type='td', colSpan=null){
    let tag = document.createElement(type);
    tag.innerHTML = content;
    if(colSpan)
        tag.colSpan = colSpan;
    return tag;
}

function createARow(parent, cells, ){
    let row = document.createElement('tr')
    cells.forEach(cell => {
        row.appendChild(cell);
    });
    parent.appendChild(row);

}


function errorHandle(inputs){
    hasError = false;
    for (let index = 0; index < 3; index++) {
        const element = inputs[index];
        if(!element.value){
            let error = inputs[index].parentElement
            error = error.querySelector('.error');
            error.innerHTML = 'error';
            hasError = true;
        } 
    }

    if(inputs[4].checked && !inputs[5].value){
        let error = input[5].parentElement.querrySelector('.error');
        error.innerHTML = 'error';
        hasError = true;
    }

    return hasError;
}

function createForm(){
    let form = document.createElement('form');
    document.body.appendChild(form);
    form.action = "#";
    form.id = 'form';

    form.appendChild(
        createInputInDiv(form, 'text', 'Költő neve:', 'kolto_nev'),
        createInputInDiv(form, 'text', 'Korszak:', 'korszak'),
        createInputInDiv(form, 'text', 'Szerelme:', 'szerelem1'),
        createInputInDiv(form, 'checkbox', 'Volt másik szerelme?', 'masodik'),
        createInputInDiv(form, 'text', 'Szerelme:', 'szerelem2'),
    )

    let button = document.createElement('button');
    button.type = 'submit';
    button.innerText = 'küld';
    form.appendChild(button);
}

/**
 * 
 * @param {htmlElement} parent 
 * @param {string} type 
 * @param {string} text 
 * @param {string} nameAndId 
 */
function createInputInDiv(parent, type, text, nameAndId=text){
    let div = document.createElement('div');

    let label = document.createElement('label');
    label.for = nameAndId;
    label.innerText = text;

    let input = document.createElement('input');
    input.type = type;
    input.name = nameAndId;
    input.id = nameAndId;

    let err = document.createElement('p');
    err.classList.add('error');

    parent.appendChild(div);
    div.appendChild(label);
    div.appendChild(document.createElement('br'));
    div.appendChild(input);
    div.appendChild(err);

    return div;
}

