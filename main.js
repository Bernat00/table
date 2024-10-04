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
