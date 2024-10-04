const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

const table = document.createElement('table');
const tableHeader = document.createElement('thead');
const tableBody = document.createElement('tbody');
const tableHeaderRow = document.createElement('tr');
const tableHeaderFhirstName = document.createElement('th');
const tableHeaderLastName = document.createElement('th');

table.appendChild(tableHeader);
table.appendChild(tableBody);
tableHeader.appendChild(tableHeaderRow);
tableHeaderRow.appendChild(tableHeaderLastName);
tableHeaderRow.appendChild(tableHeaderFhirstName);

tableHeaderFhirstName.innerHTML = 'Keresztnév';
tableHeaderLastName.innerHTML = 'Vezetékév';
tableHeaderFhirstName.colSpan = 2;

for(let line of array){
    const row = document.createElement('tr');
    const ln = document.createElement('td');
    const fn1 = document.createElement('td');

    ln.innerHTML = line.lastname;
    fn1.innerHTML = line.firstname1;
    
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

    row.addEventListener('click', function (e) {
        let selected = tableBody.querySelector('.selected');
        if(selected)
            selected.classList.remove('selected');

        e.currentTarget.classList.add('selected');
    });
};

document.body.appendChild(table);
