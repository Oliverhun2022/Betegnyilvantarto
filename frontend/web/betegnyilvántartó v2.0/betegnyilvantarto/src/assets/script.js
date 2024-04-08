// Betegnyilvántartás tömb inicializálása vagy betöltése a localStorage-ből
let betegek = JSON.parse(localStorage.getItem('patients')) || [];

// Űrlap és táblázat elemek referenciái
const form = document.getElementById('patientForm');
const tableBody = document.querySelector('#patientTable tbody');
const darkModeBtn = document.getElementById('darkModeBtn');

// Űrlap beküldése eseménykezelő
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nev = document.getElementById('name').value;
    const szuletesiDatum = document.getElementById('dob').value;
    const elerhetoseg = document.getElementById('contact').value;
    const problema = document.getElementById('issue').value;
    const anyaNev = document.getElementById('motherName').value;
    const lakcim = document.getElementById('address').value;
    const tajSzam = document.getElementById('taj').value;
    const nem = document.getElementById('gender').value;

    // Új beteg hozzáadása a tömbhöz
    betegek.push({ nev, szuletesiDatum, elerhetoseg, problema, anyaNev, lakcim, tajSzam, nem });

    // Táblázat frissítése
    tablaFrissitese();

    // Űrlap ürítése
    form.reset();

    // Betegadatok mentése a localStorage-be
    localStorage.setItem('patients', JSON.stringify(betegek));
});

// Táblázat frissítése
function tablaFrissitese() {
    tableBody.innerHTML = '';

    betegek.forEach(function (betegek, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${betegek.nev || ''}</td>
            <td>${betegek.szuletesiDatum || ''}</td>
            <td>${betegek.elerhetoseg || ''}</td>
            <td>${betegek.problema || ''}</td>
            <td>${betegek.anyaNev || ''}</td>
            <td>${betegek.lakcim || ''}</td>
            <td>${betegek.tajSzam || ''}</td>
            <td>${betegek.nem || ''}</td>
            <td>
                <button onclick="betegetSzerkeszt(${index})">Szerkesztés</button>
                <button onclick="betegetTorol(${index})">Törlés</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}

// Beteg törlése
function betegetTorol(index) {
    betegek.splice(index, 1);
    tablaFrissitese();
    // Betegadatok frissítése a localStorage-ből
    localStorage.setItem('patients', JSON.stringify(betegek));
}

// Oldal betöltésekor táblázat megjelenítése
window.onload = function () {
    tablaFrissitese();
};

// Beteg törlése megerősítéssel
function betegetTorol(index) {
    const megerosites = confirm("Biztosan törölni szeretnéd ezt a beteget?");

    if (megerosites) {
        betegek.splice(index, 1);
        tablaFrissitese();
        // Betegadatok frissítése a localStorage-ből
        localStorage.setItem('patients', JSON.stringify(betegek));
    }
}

// Beteg szerkesztése
function betegetSzerkeszt(index) {
    const beteg = betegek[index];
    const ujNev = prompt("Kérlek, add meg az új nevet:", beteg.nev);
    const ujSzuletesiDatum = prompt("Kérlek, add meg az új születési dátumot:", beteg.szuletesiDatum);
    const ujElerhetoseg = prompt("Kérlek, add meg az új elérhetőséget:", beteg.elerhetoseg);
    const ujProblema = prompt("Kérlek, add meg az új panaszt és problémát:", beteg.problema);
    const ujAnyaNev = prompt("Kérlek, add meg az új anya nevét:", beteg.anyaNev);
    const ujLakcim = prompt("Kérlek, add meg az új lakcímet:", beteg.lakcim);
    const ujTajSzam = prompt("Kérlek, add meg az új TAJ számot:", beteg.tajSzam);
    const ujNem = prompt("Kérlek, add meg az új nemet:", beteg.nem);

    if (ujNev !== null && ujSzuletesiDatum !== null && ujElerhetoseg !== null && ujProblema !== null &&
        ujNev.trim() !== '' && ujSzuletesiDatum.trim() !== '' && ujElerhetoseg.trim() !== '' && ujProblema.trim() !== '') { //   ellenőrzi, hogy az újonnan megadott adatok üresek-e vagy sem
        betegek[index] = {
            nev: ujNev,
            szuletesiDatum: ujSzuletesiDatum,
            elerhetoseg: ujElerhetoseg,
            problema: ujProblema,
            anyaNev: ujAnyaNev,
            lakcim: ujLakcim,
            tajSzam: ujTajSzam,
            nem: ujNem
        };
        tablaFrissitese();
        localStorage.setItem('patients', JSON.stringify(betegek));
    }
}
