console.log("Praktikum To-Do List Dimulai");


// AKTIVITAS 1: DOM SELECTION — SELEKSI DOM
// DOM Selection digunakan untuk "menangkap elemen" HTML
// sebelum kita memanipulasinya menggunakan JavaScript.

// document.getElementById("...") -> mengambil elemen HTML
// berdasarkan atribut ID yang sudah dibuat di index.html.


// 1. Mengambil elemen input tugas
const inputTugas = document.getElementById("input-tugas");

// 2. Mengambil tombol tambah
const btnTambah = document.getElementById("btn-tambah");

// 3. Mengambil daftar tugas
const daftarTugas = document.getElementById("daftar-tugas");

// 4. Mengambil pesan ketika belum ada tugas
const pesanKosong = document.getElementById("pesan-kosong");

// 5. Mengambil elemen statistik tugas
const totalTugas = document.getElementById("total-tugas");
const tugasSelesai = document.getElementById("tugas-selesai");
const tugasBelum = document.getElementById("tugas-belum");


// AKTIVITAS 2: MENGHITUNG STATISTIK TUGAS
// Variabel ini digunakan untuk menyimpan jumlah tugas.
// Menggunakan let karena nilainya akan berubah-ubah.

let jumlahTugas = 0;
let jumlahSelesai = 0;


// Fungsi untuk memperbarui statistik tugas
function perbaruiStatistik() {

    // menampilkan jumlah seluruh tugas
    totalTugas.innerText = jumlahTugas;

    // menampilkan jumlah tugas yang sudah selesai
    tugasSelesai.innerText = jumlahSelesai;

    // menghitung tugas yang belum selesai
    const jumlahBelum = jumlahTugas - jumlahSelesai;

    // menampilkan jumlah tugas yang belum selesai
    tugasBelum.innerText = jumlahBelum;
}


// AKTIVITAS 3: MEMBUAT TUGAS DINAMIS
// pada bagian ini kita membuat elemen HTML <li>
// secara dinamis menggunakan JavaScript.
//
// createElement("li") -> membuat elemen HTML baru.
// appendChild() -> menambahkan elemen ke dalam daftar.

function tambahTugas() {

    // 3.1 mengambil teks yang diketik oleh pengguna
    // .value -> mengambil isi dari input
    // .trim() -> menghapus spasi kosong di awal dan akhir
    const isiTugas = inputTugas.value.trim();


    // 3.2 Validasi input
    // Jika input kosong, tampilkan alert.
    if (isiTugas === "") {

        alert("Catatan Anda tidak boleh kosong");

        return;
    }


    // 3.3 Membuat elemen <li> baru
    const tugasBaru = document.createElement("li");


    // Memberikan class pada elemen <li>
    // agar tampilannya mengikuti CSS.
    tugasBaru.className = "todo-item";


    // 3.4 Membuat checkbox untuk tugas
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";


    // 3.5 Membuat elemen <span> untuk teks tugas
    const teksTugas = document.createElement("span");

    teksTugas.innerText = isiTugas;


    // 3.6 Membuat tombol hapus
    const btnHapus = document.createElement("button");

    btnHapus.innerText = "Hapus";
    btnHapus.className = "btn-hapus";


    // AKTIVITAS 4: CHECKBOX TUGAS SELESAI
    // Ketika checkbox dicentang, tugas akan diberi class
    // "completed" sehingga teks tugas dapat dicoret
    // melalui CSS.

    checkbox.addEventListener("change", function() {

        // Menambahkan atau menghapus class "completed"
        // sesuai kondisi checkbox.
        tugasBaru.classList.toggle("completed");


        // Jika checkbox dicentang
        if (checkbox.checked) {

            jumlahSelesai++;

        } else {

            jumlahSelesai--;
        }


        // Memperbarui statistik
        perbaruiStatistik();

        console.log(`Status tugas "${isiTugas}" telah diperbarui`);
    });


    // AKTIVITAS 5: MENGHAPUS TUGAS
    // remove() digunakan untuk menghapus elemen <li>
    // dari halaman.

    btnHapus.addEventListener("click", function() {

        // Jika tugas yang dihapus sudah selesai,
        // jumlah tugas selesai dikurangi.
        if (checkbox.checked) {

            jumlahSelesai--;
        }


        // Menghapus elemen tugas dari DOM
        tugasBaru.remove();


        // Mengurangi jumlah seluruh tugas
        jumlahTugas--;


        // Memperbarui statistik
        perbaruiStatistik();


        // Jika semua tugas sudah dihapus,
        // tampilkan kembali pesan kosong.
        if (jumlahTugas === 0) {

            pesanKosong.style.display = "block";
        }


        console.log(`Tugas "${isiTugas}" telah dihapus`);
    });


    // AKTIVITAS 6: MENAMBAHKAN ELEMEN KE HALAMAN

    // Memasukkan checkbox ke dalam item tugas
    tugasBaru.appendChild(checkbox);


    // Memasukkan teks tugas ke dalam item tugas
    tugasBaru.appendChild(teksTugas);


    // Memasukkan tombol hapus ke dalam item tugas
    tugasBaru.appendChild(btnHapus);


    // Memasukkan item tugas ke dalam daftar tugas
    daftarTugas.appendChild(tugasBaru);


    // Menyembunyikan pesan kosong karena sudah ada tugas
    pesanKosong.style.display = "none";


    // Mengosongkan input setelah tugas ditambahkan
    inputTugas.value = "";


    // Menambahkan jumlah tugas
    jumlahTugas++;


    // Memperbarui statistik
    perbaruiStatistik();


    console.log(`Tugas baru ditambahkan: "${isiTugas}"`);
}


// AKTIVITAS 7: EVENT LISTENER TOMBOL TAMBAH
// Ketika tombol "+ Tambah" diklik,
// jalankan fungsi tambahTugas().

btnTambah.addEventListener("click", function() {

    tambahTugas();

});


// AKTIVITAS 8: EVENT LISTENER TOMBOL ENTER
// pengguna juga dapat menambahkan tugas
// dengan menekan tombol Enter pada input.

inputTugas.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {

        tambahTugas();

    }

});


// MENAMPILKAN STATISTIK AWAL

perbaruiStatistik();

console.log("Semua fitur To-Do List siap digunakan!");