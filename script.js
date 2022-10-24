class Brend {
    constructor(Brend,Unvan ) {
        (this.brend = Brend), (this.unvan = Unvan);
    }

    Mallar = [
        [],
        [],
        []
    ];

    gonder() {
        let data = this.mallar;
        let malin_adi = document.querySelector("#malin_adi").value;
        let nomre = document.querySelector("#nomre").value;
        let unvan = document.querySelector("#unvan").value;
        data[0].push(malin_adi);
        data[1].push(nomre);
        data[2].push(unvan);
    }

    tableQur() {
        let data = this.mallar;

        let tbl = `<tr>
        <th scope="col"> # </th>
        <th scope="col"> Malin adi: </th>
        <th scope="col"> Nomre №: </th>
        <th scope="col"> Ceki(Gr): </th>
        </tr>`

        for(let i = 0; i < data[0].length; i++) {
            tbl += `<tr>
            <th scope="row"> ${i+1} </th>
            <td> ${data[0][i]} </td>
            <td> ${data[1][i]} </td>
            <td> ${data[2][i]} </td>
            </tr>`
        }

        return tbl;
    }

};

const lachin = new Brend("Avsar Gold", "Lacin T/M");
const moskva = new Brend("Avsar Gold", "Moskva T/M");

console.log(lachin);
console.log(moskva);

document.querySelector("h1").innerHTML = lachin.brend;

let arr = [];
let select = document.querySelector("select");

onload = function() {
    arr.push(lachin.unvan, moskva.unvan);

    let data = `<option selected disabled> Unvan Secin </option>`
    for(let  i=0; i<arr.length; i++) {
        data += `<option value="${i}"> ${arr[i]} </option>`
    }
    select.innerHTML = data;
};

select.addEventListener("change", (e)=> {
    document.querySelector("#btn").classList.remove('disabled');
    let val = select.value;
    if(val == 0) {
        document.querySelector("h2").innerHTML = lachin.unvan;
    }else if(val == 1) {
        document.querySelector("h2").innerHTML = moskva.unvan;
    }
});

document.querySelector('#save').addEventListener('click', ()=> {
    let val = select.value;
    if(val == 0) {
        lachin.gonder();
        document.querySelector('table').innerHTML = lachin.tableQur()
    }else if(val == 1) {
        moskva.gonder();
        document.querySelector('table').innerHTML = moskva.tableQur()
    }
});
