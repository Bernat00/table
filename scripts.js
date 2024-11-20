renderTable();
createForm();

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let kolto_neve = document.getElementById('kolto_nev');
    let korszak = document.getElementById('korszak');       //ez nincs!!!
    let szerelem1 = document.getElementById('szerelem1');
    let masodik = document.getElementById('masodik');
    let szerelem2 = document.getElementById('szerelem2');

    if(!errorHandle([kolto_neve, korszak, szerelem1, masodik, szerelem2])){
        createARowOnlyByData([
            kolto_neve.value,
            korszak.value,
            szerelem1.value
        ]);
    }
});
