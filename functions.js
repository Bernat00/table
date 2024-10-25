
/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLElement} parent 
 * @returns 
 */
function CreateTableCell(tagName, innerHTML = '', parent=document.body){
    const element = document.createElement(tagName);
    element.innerHTML = innerHTML;
    parent.appendChild(element);

    return element;
}

function LoadTable(array){
    if(document.getElementById('table'))
        (document.getElementById('table')).remove();

    const table = RenderTableBase(document.body);

    RenderTableHeader(table.querySelector('thead'));
    
    RenderTableBodyAndAddEventListener(array, table.querySelector('tbody'));
}


function ValidateFields(fieldswhatevers){
    let isGood = true;

for (const fieldName in fieldswhatevers) {
    const field = fieldswhatevers[fieldName].field;
    const errorField = field.parentElement.querySelector('.error');

    if(field.value === '' && !fieldswhatevers[fieldName].notReqired){
        errorField.innerHTML = '*A ' + field.parentElement.querySelector('label').innerHTML + ' kötelező!';
        isGood = false;
    }
    else
        errorField.innerHTML = '';

}

    return isGood;
}


/**
 * 
 * @param {string} tag 
 * @param {string} id
 * @param {HTMLElement} parent 
 * @returns
 */
function CreateHTMLElement(tag, parent, id=undefined){
    const element = document.createElement(tag);
    if(id != undefined)
        element.id = id;
    parent.appendChild(element);

    return element;
}


/**
 * 
 * @param {HTMLElement} tableHeaderRow 
 */
function RenderTableHeader(tableHeader){
    const tableHeaderRow = CreateHTMLElement('tr', tableHeader);
    CreateTableCell('th', 'Vezetékév', tableHeaderRow);
    CreateTableCell('th', 'Keresztnév', tableHeaderRow).colSpan = 2;
    CreateTableCell('th', 'Házas-e?', tableHeaderRow);
    CreateTableCell('th', 'Háziállat' ,tableHeaderRow);
}

/**
 * 
 * @param {HTMLElement} parent 
 * @returns table
 */
function RenderTableBase(parent){
    const table = CreateHTMLElement('table', parent, 'table');
    const tableHeader = CreateHTMLElement('thead', table);
    CreateHTMLElement('tbody', table);
    

    return table;
}


/**
 * 
 * @param {Array} array 
 * @param {HTMLElement} tableBody 
 */
function RenderTableBodyAndAddEventListener(array, tableBody){
    for(let line of array){
        const row = document.createElement('tr');
        tableBody.appendChild(row);

        
        CreateTableCell("td", line.lastname, row);
        const fn1 = CreateTableCell("td", line.firstname1, row);
                
        if(line.firstname2)
            CreateTableCell("td", line.firstname2, row);

        else    fn1.colSpan = 2;

        CreateTableCell("td", line.married? 'Igen':'Nem', row);
        CreateTableCell("td", line.pet, row);


        row.addEventListener('click', function (e) {
            let selected = tableBody.querySelector('.selected');
            if(selected)
                selected.classList.remove('selected');
    
            e.currentTarget.classList.add('selected');
        });
    };
}
