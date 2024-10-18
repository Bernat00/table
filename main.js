let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]


function ReLoadTable(){
    if(document.getElementById('table'))
        (document.getElementById('table')).remove();

    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    const tableHeaderRow = document.createElement('tr');
    const tableHeaderFhirstName = document.createElement('th');
    const tableHeaderLastName = document.createElement('th');
    const tableHeaderMarried = document.createElement('th');
    const tableHeaderPet = document.createElement('th');
    
    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    tableHeader.appendChild(tableHeaderRow);
    tableHeaderRow.appendChild(tableHeaderLastName);
    tableHeaderRow.appendChild(tableHeaderFhirstName);
    tableHeaderRow.appendChild(tableHeaderMarried);
    tableHeaderRow.appendChild(tableHeaderPet);
    
    table.id = 'table';
    tableHeaderFhirstName.innerHTML = 'Keresztnév';
    tableHeaderLastName.innerHTML = 'Vezetékév';
    tableHeaderMarried.innerHTML = 'Házas-e?';
    tableHeaderPet.innerHTML = 'Háziállat';
    tableHeaderFhirstName.colSpan = 2;
    
    
    for(let line of array){
        const row = document.createElement('tr');
        const ln = document.createElement('td');
        const fn1 = document.createElement('td');
        const married = document.createElement('td');
        const pet = document.createElement('td');
    
        ln.innerHTML = line.lastname;
        fn1.innerHTML = line.firstname1;
        married.innerHTML = line.married? 'Igen':'Nem';
        pet.innerHTML = line.pet;
        
        tableBody.appendChild(row);
        row.appendChild(ln);    
        row.appendChild(fn1);
        
        
        if(line.firstname2){
            const fn2 = document.createElement('td');
            fn2.innerHTML = line.firstname2;
            row.appendChild(fn2);
        }
        else {
            fn1.colSpan = 2;
        }
        
        row.appendChild(married);
        row.appendChild(pet);
    
    
        row.addEventListener('click', function (e) {
            let selected = tableBody.querySelector('.selected');
            if(selected)
                selected.classList.remove('selected');
    
            e.currentTarget.classList.add('selected');
        });
    };


    document.body.appendChild(table);
}

ReLoadTable();


//formcucc
const form = document.getElementById('form');
form.addEventListener('submit', FormHandle);


function FormHandle(e) {
    e.preventDefault();
    console.log(e);

    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');

    // muszaj-e
    firstname2.notReqired = true;

    const lastnameValue = lastname.value;
    const firstname1Value = firstname1.value;
    const firstname2Value = firstname2.value;
    const marriedValue = married.checked;
    const petValue = pet.value;

    const fields = {
        firstname1: firstname1Value,
        firstname2: firstname2Value,
        lastname: lastnameValue,
        married: marriedValue,
        pet: petValue
        }
    

    if(ValidateFields(
        {
        lastname: lastname,
        firstname1: firstname1,
        firstname2: firstname2,
        pet: pet
        }))
    {
        array.push(fields);      
    }
  
    ReLoadTable();
}


function ValidateFields(fields){
    let isGood = true;

    for (const fieldName in fields) {
        const field = fields[fieldName];
        errorField = field.parentElement.querySelector('.error');

        if(field.value === '' && !field.notReqired){
            errorField.innerHTML = '*A ' + field.parentElement.querySelector('label').innerHTML + ' kötelező!';
            isGood = false;
        }
        else
            errorField.innerHTML = '';
    }
    
        return isGood;
}
