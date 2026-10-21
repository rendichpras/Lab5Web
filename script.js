document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}

function operasiDasar(a, b) {
  const hasil = [
    ["Penjumlahan", a + b],
    ["Pengurangan", a - b],
    ["Perkalian", a * b],
    ["Pembagian", b !== 0 ? a / b : "Tidak dapat dibagi nol"],
    ["Modulus", a % b],
  ];

  hasil.forEach(([operasi, nilai]) => console.log(`${operasi}:`, nilai));
  return hasil;
}

operasiDasar(9, 4);

const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);

if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}

const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1": alert("Bilangan satu"); break;
  case "2": alert("Bilangan dua"); break;
  case "3": alert("Bilangan tiga"); break;
  case "4": alert("Bilangan empat"); break;
  case "5": alert("Bilangan lima"); break;
  default: alert("Pilihan tidak tersedia");
}

function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}

function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}

function prosesFormNilai(event) {
  event.preventDefault();

  const kolomNilai = [
    document.getElementById("nilaiTugas"),
    document.getElementById("nilaiUts"),
    document.getElementById("nilaiUas"),
  ];
  const pesanValidasi = document.getElementById("pesanValidasiNilai");
  const panelHasil = document.getElementById("hasilNilaiMahasiswa");
  const input = kolomNilai.map((kolom) => kolom.value.trim());

  pesanValidasi.textContent = "";
  panelHasil.hidden = true;

  if (input.some((nilai) => nilai === "")) {
    pesanValidasi.textContent = "Semua kolom nilai wajib diisi.";
    return;
  }

  const nilai = input.map(Number);
  if (nilai.some((angka) => !Number.isFinite(angka) || angka < 0 || angka > 100)) {
    pesanValidasi.textContent = "Setiap nilai harus berada pada rentang 0 sampai 100.";
    return;
  }

  const [tugas, uts, uas] = nilai;
  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  document.getElementById("nilaiAkhir").textContent = akhir.toFixed(2);
  document.getElementById("predikat").textContent = tentukanPredikat(akhir);
  document.getElementById("statusKelulusan").textContent =
    akhir >= 60 ? "Lulus" : "Belum lulus";
  panelHasil.hidden = false;
}

document
  .getElementById("formNilaiMahasiswa")
  .addEventListener("submit", prosesFormNilai);

function jalankanOperasiDariPrompt() {
  const inputPertama = prompt("Masukkan nilai pertama:");
  if (inputPertama === null) {
    document.getElementById("hasilOperasiPrompt").textContent = "Perhitungan dibatalkan.";
    return;
  }

  const inputKedua = prompt("Masukkan nilai kedua:");
  if (inputKedua === null) {
    document.getElementById("hasilOperasiPrompt").textContent = "Perhitungan dibatalkan.";
    return;
  }

  const pertama = Number(inputPertama.trim());
  const kedua = Number(inputKedua.trim());
  const hasil = document.getElementById("hasilOperasiPrompt");

  if (
    inputPertama.trim() === "" ||
    inputKedua.trim() === "" ||
    !Number.isFinite(pertama) ||
    !Number.isFinite(kedua)
  ) {
    hasil.textContent = "Masukkan dua nilai numerik yang valid.";
    return;
  }

  hasil.textContent = operasiDasar(pertama, kedua)
    .map(([operasi, nilai]) => `${operasi}: ${nilai}`)
    .join("\n");
}

document
  .getElementById("tombolOperasiPrompt")
  .addEventListener("click", jalankanOperasiDariPrompt);

const isiTabelPerkalian = document.getElementById("isiTabelPerkalian");
for (let pengali = 1; pengali <= 10; pengali += 1) {
  const baris = document.createElement("tr");
  const perhitungan = document.createElement("td");
  const hasil = document.createElement("td");
  perhitungan.textContent = `7 × ${pengali}`;
  hasil.textContent = String(7 * pengali);
  baris.append(perhitungan, hasil);
  isiTabelPerkalian.append(baris);
}

function cekGenap(angka) {
  return Number.isInteger(angka) && angka % 2 === 0;
}

document.getElementById("tombolCekGenap").addEventListener("click", () => {
  const input = document.getElementById("angkaEksperimen").value.trim();
  const hasil = document.getElementById("hasilCekGenap");

  if (input === "" || !Number.isInteger(Number(input))) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }

  hasil.textContent = `cekGenap(${input}) mengembalikan ${cekGenap(Number(input))}.`;
});

const tombolToggle = document.getElementById("tombolToggle");
const kontenToggle = document.getElementById("kontenToggle");
tombolToggle.addEventListener("click", () => {
  kontenToggle.hidden = !kontenToggle.hidden;
  tombolToggle.setAttribute("aria-expanded", String(!kontenToggle.hidden));
  tombolToggle.textContent = kontenToggle.hidden
    ? "Tampilkan keterangan"
    : "Sembunyikan keterangan";
});
