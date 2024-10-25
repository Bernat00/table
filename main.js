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




LoadTable(array);



//formcucc
const form = document.getElementById('form');
form.addEventListener('submit', FormHandle);

function FormHandle(e) {
    e.preventDefault();
    console.log(e);


    const fields = {
        firstname1: document.getElementById('firstname1').value,
        firstname2: document.getElementById('firstname2').value,
        lastname: document.getElementById('lastname').value,
        married: document.getElementById('married').checked,
        pet: document.getElementById('pet').value
        }
    

        let lastnameOBJ = {
            field: lastname
        };
        let firstname1OBJ = {
            field: firstname1
        };
        let firstname2OBJ = {
            field: firstname2,
            notReqired: true
        };
        let petOBJ = {
            field: pet
        };

        let fieldswhatevers = [lastnameOBJ, firstname1OBJ, firstname2OBJ, petOBJ ];
        

    if(ValidateFields(fieldswhatevers))
    {
        array.push(fields);      
    }
  
    LoadTable(array);
}
