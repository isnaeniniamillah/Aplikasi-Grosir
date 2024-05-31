var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}

//Pembuatan data
function readFormData() {
    var formData = {};
    formData["kodebarang"] = document.getElementById("kodebarang").value;
    formData["namabarang"] = document.getElementById("namabarang").value;
    formData["jumlahstok"] = document.getElementById("jumlahstok").value;
    formData["hargabarang"] = document.getElementById("hargabarang").value;
    return formData;
}

//Masukan data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.kodebarang;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.namabarang;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.jumlahstok;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.hargabarang;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit  data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("kodebarang").value = selectedRow.cells[0].innerHTML;
    document.getElementById("namabarang").value = selectedRow.cells[1].innerHTML;
    document.getElementById("jumlahstok").value = selectedRow.cells[2].innerHTML;
    document.getElementById("hargabarang").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.kodebarang;
    selectedRow.cells[1].innerHTML = formData.namabarang;
    selectedRow.cells[2].innerHTML = formData.jumlahstok;
    selectedRow.cells[3].innerHTML = formData.hargabarang;
}

//Hapus data
function onDelete(td) {
    if (confirm('Apakah kamu Akan Menghapus Data Ini')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset data
function resetForm() {
    document.getElementById("kodebarang").value = '';
    document.getElementById("namabarang").value = '';
    document.getElementById("jumlahstok").value = '';
    document.getElementById("hargabarang").value = '';
    selectedRow = null;
}