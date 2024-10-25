
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

function LoadTable(){
    if(document.getElementById('table'))
        (document.getElementById('table')).remove();


    const table = CreateHTMLElement('table', document.body, 'table');
    const tableHeader = CreateHTMLElement('thead', table);
    const tableBody = CreateHTMLElement('tbody', table);
    const tableHeaderRow = CreateHTMLElement('tr', tableHeader);


    CreateTableCell('th', 'Vezetékév', tableHeaderRow);
    CreateTableCell('th', 'Keresztnév', tableHeaderRow).colSpan = 2;
    CreateTableCell('th', 'Házas-e?', tableHeaderRow);
    CreateTableCell('th', 'Háziállat' ,tableHeaderRow);

    table.id = 'table';
        
    
    for(let line of array){


        const row = document.createElement('tr');
        tableBody.appendChild(row);

        
        CreateTableCell("td", line.lastname, row);
        const fn1 = CreateTableCell("td", line.firstname1, row);
                
        if(line.firstname2){
            CreateTableCell("td", line.firstname2, row);
        }
        else {
            fn1.colSpan = 2;
        }

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


function ValidateFields(fieldswhatevers){
    let isGood = true;

for (const fieldName in fieldswhatevers) {
    const field = fieldswhatevers[fieldName].field;
    errorField = field.parentElement.querySelector('.error');

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
