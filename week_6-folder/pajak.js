function pajak() {
    var value = parseFloat(document.getElementById('harga').value);
    var result = document.getElementById('result');

    var peringatan = document.getElementById('peringatan');

    if(isNaN(value)) {
        result.innerHTML = "Masukkan angka yang valid";
        peringatan.style.display = "none";
        return;
    }

    var pajak = value *0.11;
    result.innerHTML = "Nilai pajak 11% dari " + value + " adalah <b>" + pajak.toFixed(2) + "</b>"

    if(pajak > 80) {
        peringatan.style.display = "block";
    } else {
        peringatan.style.display = "none";
    }
}