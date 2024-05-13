const form = document.getElementById("form-hitung");
const hasilElement = document.getElementById("hasil");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tipe = document.getElementById("tipe").value;
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const n = parseInt(document.getElementById("n").value);

    let sukuN;

    if (tipe === "aritmatika") {
        sukuN = a + (n - 1) * b;
    } else if (tipe === "geometri") {
        sukuN = a * Math.pow(b, n - 1);
    } else {
        sukuN = "Tipe tidak valid";
    }

    const deskripsi = `Suku ke-${n} pada baris ${tipe} adalah: ${sukuN.toFixed(2)}`;

    hasilElement.textContent = deskripsi;
});
