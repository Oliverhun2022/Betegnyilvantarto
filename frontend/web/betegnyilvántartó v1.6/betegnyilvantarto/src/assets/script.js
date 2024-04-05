// Betegnyilvántartás tömb inicializálása vagy betöltése a localStorage-ből
let patients = JSON.parse(localStorage.getItem('patients')) || [];

// Űrlap és táblázat elemek referenciái
const form = document.getElementById('patientForm');
const tableBody = document.querySelector('#patientTable tbody');
const darkModeBtn = document.getElementById('darkModeBtn');

// Űrlap beküldése eseménykezelő
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const contact = document.getElementById('contact').value;
    const issue = document.getElementById('issue').value;
    const motherName = document.getElementById('motherName').value;
    const address = document.getElementById('address').value;
    const taj = document.getElementById('taj').value;
    const gender = document.getElementById('gender').value;

    // Új beteg hozzáadása a tömbhöz
    patients.push({ name, dob, contact, issue, motherName, address, taj, gender });

    // Táblázat frissítése
    renderTable();

    // Űrlap ürítése
    form.reset();

    // Betegadatok mentése a localStorage-be
    localStorage.setItem('patients', JSON.stringify(patients));
});

// Táblázat frissítése
function renderTable() {
    tableBody.innerHTML = '';

    patients.forEach(function (patient, index) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${patient.name || ''}</td>
            <td>${patient.dob || ''}</td>
            <td>${patient.contact || ''}</td>
            <td>${patient.issue || ''}</td>
            <td>${patient.motherName || ''}</td>
            <td>${patient.address || ''}</td>
            <td>${patient.taj || ''}</td>
            <td>${patient.gender || ''}</td>
            <td>
                <button onclick="editPatient(${index})">Szerkesztés</button>
                <button onclick="deletePatient(${index})">Törlés</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });
}


// Beteg törlése
function deletePatient(index) {
    patients.splice(index, 1);
    renderTable();
    // Betegadatok frissítése a localStorage-ből
    localStorage.setItem('patients', JSON.stringify(patients));
}

// Oldal betöltésekor táblázat megjelenítése
window.onload = function () {
    renderTable();
};

// Beteg törlése megerősítéssel
function deletePatient(index) {
    const confirmation = confirm("Biztosan törölni szeretnéd ezt a beteget?"); // Megerősítés kérése a felhasználótól

    if (confirmation) { // Ha a felhasználó megerősítette a törlést
        patients.splice(index, 1); // Beteg törlése a tömbből
        renderTable(); // Táblázat frissítése
        // Betegadatok frissítése a localStorage-ből
        localStorage.setItem('patients', JSON.stringify(patients));
    }
    // Ha a felhasználó nem erősítette meg a törlést, akkor nem történik semmi
}

// Beteg szerkesztése
function editPatient(index) {
    const patient = patients[index];
    const newName = prompt("Kérlek, adja meg az új nevet:", patient.name);
    const newDob = prompt("Kérlek, adja meg az új születési dátumot:", patient.dob);
    const newContact = prompt("Kérlek, adja meg az új elérhetőséget:", patient.contact);
    const newIssue = prompt("Kérlek, adja meg az új panaszát és problémáját:", patient.issue);
    const newMotherName = prompt("Kérlek, adja meg az új anyja nevét:", patient.motherName);
    const newAddress = prompt("Kérlek, adja meg az új lakcímet:", patient.address);
    const newTaj = prompt("Kérlek, adja meg az új TAJ számot:", patient.taj);
    const newGender = prompt("Kérlek, adja meg az új nemet:", patient.gender);

    if (newName !== null && newDob !== null && newContact !== null && newIssue !== null &&
        newName.trim() !== '' && newDob.trim() !== '' && newContact.trim() !== '' && newIssue.trim() !== '') {
        patients[index] = {
            name: newName,
            dob: newDob,
            contact: newContact,
            issue: newIssue,
            motherName: newMotherName,
            address: newAddress,
            taj: newTaj,
            gender: newGender
        };
        renderTable();
        localStorage.setItem('patients', JSON.stringify(patients)); // Betegadatok frissítése a localStorage-ből
    }
}

